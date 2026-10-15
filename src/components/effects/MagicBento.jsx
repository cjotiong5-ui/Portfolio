import './magic-bento.css'

export function MagicBento({ items, renderCell, className = '' }) {
  return (
    <div className={`bento${className ? ' ' + className : ''}`}>
      {items.map((item, i) =>
        renderCell ? renderCell(item, i) : (
          <div
            key={item.id || i}
            className={`bento-cell reveal${item.span ? ' span-' + item.span : ''}`}
            style={{ '--reveal-i': i }}
          >
            {item.title}
          </div>
        )
      )}
    </div>
  )
}