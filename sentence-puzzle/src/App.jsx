import { useState, useEffect } from 'react'
import { allQuestions } from './questions'
import { loadProgress, saveProgress, isTodayCompleted, getTodayQuestionIds, getCalendarDays, getStreak, getTodayKey } from './storage'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import ResultScreen from './screens/ResultScreen'
import './App.css'

const DAILY_COUNT = 5

export default function App() {
  const [screen, setScreen] = useState('home') // home | game | result
  const [progress, setProgress] = useState(() => loadProgress())
  const [todayIds, setTodayIds] = useState([])
  const [gameResult, setGameResult] = useState(null)

  const todayCompleted = isTodayCompleted(progress)
  const streak = getStreak(progress.completedDays)
  const calendarDays = getCalendarDays(progress.completedDays)

  function handleStart() {
    const ids = getTodayQuestionIds(progress, allQuestions, DAILY_COUNT)
    setTodayIds(ids)
    setScreen('game')
  }

  function handleGameComplete(score, total) {
    const today = getTodayKey()
    const ids = todayIds

    const updated = {
      ...progress,
      completedDays: {
        ...progress.completedDays,
        [today]: { score, total, questionIds: ids }
      },
      lastPlayedDate: today,
    }
    setProgress(updated)
    saveProgress(updated)
    setGameResult({ score, total })
    setScreen('result')
  }

  function handleBackHome() {
    setScreen('home')
  }

  const todayQuestions = allQuestions.filter(q => todayIds.includes(q.id))

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen
          streak={streak}
          calendarDays={calendarDays}
          todayCompleted={todayCompleted}
          todayData={progress.completedDays[getTodayKey()]}
          onStart={handleStart}
        />
      )}
      {screen === 'game' && (
        <GameScreen
          questions={todayQuestions}
          onComplete={handleGameComplete}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          score={gameResult?.score}
          total={gameResult?.total}
          onHome={handleBackHome}
        />
      )}
    </div>
  )
}
