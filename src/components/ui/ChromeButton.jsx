import './chrome-button.css'

export function ChromeButton({ href, children, onClick, type = 'button', className = '' }) {
  if (href) {
    return (
      <a href={href} className={`chrome-btn${className ? ' ' + className : ''}`}>
        <span className="chrome-btn-inner">{children}</span>
      </a>
    )
  }
  return (
    <button type={type} className={`chrome-btn${className ? ' ' + className : ''}`} onClick={onClick}>
      <span className="chrome-btn-inner">{children}</span>
    </button>
  )
}