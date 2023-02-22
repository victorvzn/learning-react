import { useState } from 'react'
import confetti from 'canvas-confetti'

import { checkEndGame, checkWinnerFrom } from './logic/board'
import { TURNS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { GameBoard } from './components/GameBoard'
import { Turn } from './components/Turn'

function App () {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const handleUpdateBoard = (index) => {
    // No actualizamos esta posición si ya tiene algo
    if (board[index] || winner) return

    // Actualizamos esta posición
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // verificar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)

    if (newWinner) {
      confetti({ shapes: ['star'] })
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>

      <button onClick={resetGame}>Reset de juego</button>

      <GameBoard
        board={board}
        handleUpdateBoard={handleUpdateBoard}
      />

      <Turn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
