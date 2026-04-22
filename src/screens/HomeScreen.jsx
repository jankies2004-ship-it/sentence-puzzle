import './HomeScreen.css'

export default function HomeScreen({ streak, calendarDays, todayCompleted, todayData, onStart }) {
  // カレンダーを週単位で分割
  const weeks = []
  const paddedDays = [...calendarDays]
  // 先頭を日曜始まりに揃えるため空白を追加
  const firstDay = new Date()
  firstDay.setDate(firstDay.getDate() - 29)
  const startDow = firstDay.getDay() // 0=日
  for (let i = 0; i < startDow; i++) paddedDays.unshift(null)
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7))
  }

  const totalDays = Object.keys(
    calendarDays.filter(d => d.completed).reduce((a, d) => ({ ...a, [d.key]: true }), {})
  ).length

  return (
    <div className="home-screen">
      {/* Header */}
      <header className="home-header">
        <div className="header-logo">
          <span className="logo-en">Daily</span>
          <span className="logo-jp">英文パズル</span>
        </div>
        <div className="header-streak">
          <span className="streak-flame">🔥</span>
          <span className="streak-num">{streak}</span>
          <span className="streak-label">日連続</span>
        </div>
      </header>

      {/* Today's card */}
      <div className={`today-card ${todayCompleted ? 'done' : ''}`}>
        {todayCompleted ? (
          <div className="today-done">
            <div className="done-icon">✓</div>
            <div>
              <p className="done-title">今日のパズル完了！</p>
              <p className="done-sub">{todayData?.score} / {todayData?.total} 問正解</p>
            </div>
          </div>
        ) : (
          <div className="today-todo">
            <div className="today-info">
              <p className="today-label">今日の問題</p>
              <p className="today-count">5 問</p>
              <p className="today-desc">英単語を並べ替えて英文を作ろう</p>
            </div>
            <button className="btn-start" onClick={onStart}>
              スタート →
            </button>
          </div>
        )}
      </div>

      {/* Stats row */}
      <div className="stats-row">
        <div className="stat-box">
          <span className="stat-num">{streak}</span>
          <span className="stat-label">現在のストリーク</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-box">
          <span className="stat-num">{totalDays}</span>
          <span className="stat-label">累計クリア日数</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="calendar-section">
        <h2 className="section-title">過去30日間の記録</h2>
        <div className="cal-grid">
          {['日', '月', '火', '水', '木', '金', '土'].map(d => (
            <div key={d} className="cal-dow">{d}</div>
          ))}
          {weeks.map((week, wi) =>
            week.map((day, di) =>
              day === null
                ? <div key={`e-${wi}-${di}`} className="cal-cell empty" />
                : (
                  <div
                    key={day.key}
                    className={`cal-cell ${day.completed ? 'completed' : ''} ${day.isToday ? 'today' : ''}`}
                    title={`${day.month}/${day.date}`}
                  >
                    <span className="cal-date">{day.date}</span>
                    {day.completed && <span className="cal-dot" />}
                  </div>
                )
            )
          )}
        </div>
      </div>

      {/* already done retry */}
      {todayCompleted && (
        <div className="retry-section">
          <button className="btn-retry" onClick={onStart}>もう一度やり直す</button>
        </div>
      )}
    </div>
  )
}
