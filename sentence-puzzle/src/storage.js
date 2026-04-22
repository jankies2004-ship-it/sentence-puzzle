// localStorage を使った進捗管理

const STORAGE_KEY = 'sentence_puzzle_progress'

function getToday() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress()
    return JSON.parse(raw)
  } catch {
    return defaultProgress()
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function defaultProgress() {
  return {
    completedDays: {},   // { "2025-01-15": { score: 5, total: 5, questionIds: [1,2,3,4,5] } }
    streak: 0,
    lastPlayedDate: null,
  }
}

export function getStreak(completedDays) {
  const today = getToday()
  const dates = Object.keys(completedDays).sort()
  if (dates.length === 0) return 0

  let streak = 0
  const d = new Date()

  // 今日か昨日からさかのぼってストリークを計算
  const todayStr = getToday()
  const yesterdayStr = (() => {
    const y = new Date(); y.setDate(y.getDate() - 1)
    return `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`
  })()

  const hasToday = completedDays[todayStr]
  const hasYesterday = completedDays[yesterdayStr]

  if (!hasToday && !hasYesterday) return 0

  let checkDate = new Date()
  if (!hasToday) checkDate.setDate(checkDate.getDate() - 1)

  while (true) {
    const key = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`
    if (completedDays[key]) {
      streak++
      checkDate.setDate(checkDate.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}

export function getTodayKey() {
  return getToday()
}

export function isTodayCompleted(progress) {
  return !!progress.completedDays[getToday()]
}

// 今日の問題IDを取得（まだなければ新しく生成）
export function getTodayQuestionIds(progress, allQuestions, count = 5) {
  const today = getToday()
  if (progress.completedDays[today]) {
    return progress.completedDays[today].questionIds
  }
  // まだ今日の問題がない → ランダム抽出
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).map(q => q.id)
}

// 最近30日のカレンダーデータ
export function getCalendarDays(completedDays) {
  const days = []
  const today = new Date()
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    days.push({
      key,
      date: d.getDate(),
      month: d.getMonth() + 1,
      isToday: i === 0,
      completed: !!completedDays[key],
    })
  }
  return days
}
