import React from 'react'
import { useAppContext } from '../context/AppContext'

const GameOver = () => {

    const { gameOver, setGameOver, correctWord, currentAttempt } = useAppContext()
  return (
    <div>
        <h3>{gameOver.guessedWord? "You Correctly guessed" : "You failed"}</h3>
        <h1>The word was: {correctWord}</h1>
        {gameOver.guessedWord? <h3>You guessed in {currentAttempt.attempt} {currentAttempt.attempt > 1? "attempts" : "attempt"} </h3> : null }
    </div>
  )
}

export default GameOver