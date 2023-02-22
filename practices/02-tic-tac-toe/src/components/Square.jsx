export function Square ({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : null}`

  const handleClick = () => updateBoard()

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
