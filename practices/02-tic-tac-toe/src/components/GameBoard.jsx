import { Square } from './Square'

export function GameBoard ({ board, handleUpdateBoard }) {
  return (
    <section className='game'>
      {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={() => handleUpdateBoard(index)}
              >
                {board[index]}
              </Square>
            )
          })
        }
    </section>
  )
}
