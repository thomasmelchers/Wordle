import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import { AppContextProvider } from './context/AppContext';
import { boardDefault, generateWordSet } from './Words';
import style from "./App.module.css"

export interface currentAttempType {
  attempt: number, 
  letterPosition: number
}

export interface gameOverType {
  gameOver: boolean,
  guessedWord: boolean
}

function App() {
  const [board, setBoard] = useState<string[][]>(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState<currentAttempType>({attempt: 0, letterPosition: 0})
  const [disabledLetters, setDisabledLetters] = useState<string[]>([])
  const [gameOver, setGameOver] = useState<gameOverType>({gameOver: false, guessedWord: false})
  const [correctWord, setCorrectWord] = useState<string>("")

  useEffect(() => {
    const word = generateWordSet()
    setCorrectWord(word)
  }, [])

  const onSelect = (keyValue: string) => {
    if (currentAttempt.letterPosition > 4 ) return
        const newBoard = [...board]
        newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
        setBoard(newBoard)
        setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return
          const newBoard = [...board]
          newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ""
          setBoard(newBoard)
          setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
  }

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return

    let currentWord = ""
    for (let i = 0; i < 5 ; i++) {
       currentWord += board[currentAttempt.attempt][i] 
    }
    
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0})
    
     if (currentWord === correctWord.toUpperCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    } else if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  }

  return (
    <div className={style.App}>
     <nav>
      <h1>Wordle</h1>
     </nav>
    <AppContextProvider value={{board, setBoard, currentAttempt, setCurrentAttempt, onSelect, onDelete, onEnter, correctWord, disabledLetters, setDisabledLetters, gameOver, setGameOver}}>
      <div className={style.game}>
        <Board />
        {gameOver.gameOver? <GameOver/> : <Keyboard />}
      </div>
    </AppContextProvider>
    </div>
  );
}

export default App;
