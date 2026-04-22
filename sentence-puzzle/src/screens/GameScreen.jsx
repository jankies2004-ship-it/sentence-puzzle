import { useState, useEffect, useCallback } from 'react'
import './GameScreen.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function GameScreen({ questions, onComplete }) {
  const [qIndex, setQIndex] = useState(0)
  const [pool, setPool] = useState([]) // { id, word }
  const [selected, setSelected] = useState([]) // { id, word }
  const [feedback, setFeedback] = useState(null) // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const currentQ = questions[qIndex]

  useEffect(() => {
    if (!currentQ) return
    const words = currentQ.answer.map((w, i) => ({ id: i, word: w }))
    setPool(shuffle(words))
    setSelected([])
    setFeedback(null)
    setShowAnswer(false)
  }, [qIndex, currentQ])

  const handlePoolClick = (item) => {
    if (feedback) return
    setPool(prev => prev.filter(p => p.id !== item.id))
    setSelected(prev => [...prev, item])
  }

  const handleSelectedClick = (item) => {
    if (feedback) return
    setSelected(prev => prev.filter(s => s.id !== item.id))
    setPool(prev => [...prev, item])
  }

  const handleCheck = useCallback(() => {
    if (feedback || selected.length === 0) return
    const answer = selected.map(s => s.word).join(' ')
    const correct = currentQ.answer.join(' ')
    if (answer === correct) {
      setFeedback('correct')
      setScore(s => s + 1)
    } else {
      setFeedback('wrong')
    }
  }, [feedback, selected, currentQ])

  const handleNext = () => {
    if (qIndex + 1 >= questions.length) {
      onComplete(score, questions.length)
    } else {
      setQIndex(i => i + 1)
    }
  }

  // Enter key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter') {
        if (feedback) handleNext()
        else handleCheck()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [feedback, handleCheck])

  if (!currentQ) return null

  const progress = ((qIndex) / questions.length) * 100

  return (
    <div className="game-screen">
      {/* Header */}
      <div className="game-header">
        <div className="g-progress-wrap">
          <div className="g-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="g-meta">
          <span className="g-qnum">{qIndex + 1} <span className="g-qtotal">/ {questions.length}</span></span>
          <span className="g-score">✨ {score} 正解</span>
        </div>
      </div>

      {/* Japanese */}
      <div className="jp-card">
        <p className="jp-label">日本語</p>
        <p className="jp-text">{currentQ.japanese}</p>
      </div>

      {/* Selected area */}
      <div className={`answer-zone ${feedback || ''}`}>
        <p className="zone-label">英文を並べよう</p>
        <div className="answer-words">
          {selected.length === 0
            ? <span className="zone-placeholder">単語をタップして並べてください</span>
            : selected.map(item => (
              <button
                key={item.id}
                className="word-chip selected"
                onClick={() => handleSelectedClick(item)}
              >
                {item.word}
              </button>
            ))
          }
        </div>
        {feedback === 'correct' && (
          <div className="feedback correct">
            <span className="fb-icon">⭕</span>
            <span>正解！</span>
          </div>
        )}
        {feedback === 'wrong' && (
          <div className="feedback wrong">
            <span className="fb-icon">❌</span>
            <div>
              <p>不正解…</p>
              {showAnswer
                ? <p className="correct-ans">正解：{currentQ.answer.join(' ')}</p>
                : <button className="btn-show-ans" onClick={() => setShowAnswer(true)}>正解を見る</button>
              }
            </div>
          </div>
        )}
      </div>

      {/* Word pool */}
      <div className="word-pool">
        {pool.map(item => (
          <button
            key={item.id}
            className="word-chip pool"
            onClick={() => handlePoolClick(item)}
            disabled={!!feedback}
          >
            {item.word}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="game-controls">
        {!feedback ? (
          <>
            <button
              className="btn-clear"
              onClick={() => {
                const all = [...selected, ...pool]
                setPool(shuffle(all))
                setSelected([])
              }}
            >
              リセット
            </button>
            <button
              className="btn-check"
              onClick={handleCheck}
              disabled={selected.length === 0}
            >
              答え合わせ
            </button>
          </>
        ) : (
          <button className="btn-next" onClick={handleNext}>
            {qIndex + 1 >= questions.length ? '結果を見る 🎉' : '次の問題 →'}
          </button>
        )}
      </div>
    </div>
  )
}
