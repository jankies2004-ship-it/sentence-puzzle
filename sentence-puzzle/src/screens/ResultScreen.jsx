import './ResultScreen.css'

export default function ResultScreen({ score, total, onHome }) {
  const pct = Math.round((score / total) * 100)
  const { emoji, message, color } = getResult(score, total)

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-emoji">{emoji}</div>
        <p className="result-message">{message}</p>

        <div className="result-score-wrap">
          <span className="r-score">{score}</span>
          <span className="r-sep">/</span>
          <span className="r-total">{total}</span>
        </div>

        <div className="result-bar-bg">
          <div
            className="result-bar-fill"
            style={{ width: `${pct}%`, background: color }}
          />
        </div>
        <p className="result-pct">{pct}% 正解</p>
      </div>

      <button className="btn-home" onClick={onHome}>
        ホームへ戻る
      </button>
    </div>
  )
}

function getResult(score, total) {
  const pct = score / total
  if (pct === 1) return { emoji: '🏆', message: 'パーフェクト！すばらしい！', color: '#c49a2a' }
  if (pct >= 0.8) return { emoji: '🌟', message: 'とてもよくできました！', color: '#2a6b3c' }
  if (pct >= 0.6) return { emoji: '👍', message: 'よくできました！', color: '#2a6b3c' }
  return { emoji: '📚', message: 'もう少し練習しよう！', color: '#d4521a' }
}
