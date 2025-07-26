import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"

const TURNS = {
  X: 'x',
  O: 'o'
}


// in this function we define the board with the function square
const Square = ({ children, isSelected, updateBoard, index}) => {
  // we check over here if is selected or not
  const className = `square ${isSelected ? 'is-selected': ''}`
  // and than this function is to handle each click inside of the board the are the one that are in charge to draw the necessary simbols
  const handleClick = () => {
    updateBoard(index)
  }
  return(
    // we return here the respective information for the board
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  // this variable handle each index of the array for each position  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  // the const is for check if there's some winner in the game 
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // if there's not winner
    return null
  }

 
  
  const checkEndGame = (newBoard) => {
    // this is to check if there's some draw in the game 
    // also we check that there's not empty spacess without fill 
    return newBoard.every((Square) => Square != null)
  }

  const updateBoard = (index) => {
    // this conditional is used to update the position if has something already 
    if (board[index] || winner) return
    
    // here we update the board 
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // this const check if there's some winner already
    const newWinner  = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
      confetti()
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <main className='board'>
        <button onClick={resetGame}>Reset Game</button>
        <h1>tic tac toe</h1>
        <section className='game'>
          {/* in this case we're going to use .map to iterate for each item of the square in order to create the board */}
          {
            board.map((square, index) => {
              return(
                // we qet for the function the necessary elements like key and index and anther thing that it needs to be requested from the parent like updateBoard
                <Square 
                  key={index} 
                  index={index}
                  updateBoard={updateBoard}
                >
                  {/* we create here the board with the respective index */}
                  {square}
                  
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
              {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        {
          winner != null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false
                      ? 'Empate'
                      : 'Gano: '
                  }
                </h2>
                <header>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Star Again</button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App
