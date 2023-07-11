import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import style from './Letter.module.css'


interface Props {
    letterPosition: number,
    attemptValue: number,
}

const Letter: React.FC<Props> = ({letterPosition, attemptValue}) => {
    const { board, correctWord, currentAttempt, setDisabledLetters } = useAppContext()
    const letter = board[attemptValue][letterPosition]

    const correct = correctWord.toUpperCase()[letterPosition] === letter
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
    const letterState = (currentAttempt.attempt > attemptValue)? ((correct) ? `${style.correct}` : almost ? `${style.almost}` : `${style.error}`) :  ""

    // run everytime there is a new attempt
    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetters((prevLetter) => [...prevLetter, letter])
      }
    },[currentAttempt.attempt])

  return (
    <div className={style.letter} id={letterState}>{letter}</div>
  )
}

export default Letter