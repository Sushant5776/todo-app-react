import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const styles = {
    width: '200px',
    margin: '20px auto',

}

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = i => {
        const boardCopy = [...board]
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return
        // Put a X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game