import React, { useCallback, useEffect } from 'react'
import Key from './Key'
import { useAppContext } from '../context/AppContext'
import style from "./Keyboard.module.css"

interface Props {
    
}

const Keyboard: React.FC<Props> = () => {

  const {onSelect, onDelete, onEnter, disabledLetters } = useAppContext()

  const keys1: string[] = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2: string[] = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"]
  const keys3: string[] = ["W", "X", "C", "V", "B", "N"]

  // useCallback prevent to reevalute the function
  const handleKeyboard = useCallback((event: any) => {
    if (event.key === "Enter") {
      onEnter()
    } else if (event.key === "Backspace") {
      onDelete()
    } else {
      keys1.forEach((key) => {
        if(event.key.toLowerCase() === key.toLowerCase()) {
          onSelect(key)
        }
      })
      keys2.forEach((key) => {
        if(event.key.toLowerCase() === key.toLowerCase()) {
          onSelect(key)
        }
      })
      keys3.forEach((key) => {
        if(event.key.toLowerCase() === key.toLowerCase()) {
          onSelect(key)
        }
      })
    }
  }, [onSelect, onDelete, onEnter])

  useEffect(() => {
    // it is how to detect keyboard event
    document.addEventListener("keydown", handleKeyboard)

    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  },[handleKeyboard])

  return (
    <div className={style.keyboard} onKeyDown={handleKeyboard}>
      <div className={style.line}>
        {keys1.map((keyValue, index) =>{return <Key key={`keys1-${index}`} keyValue={keyValue}  bigKey={false} disabled={disabledLetters.includes(keyValue)} />})}
      </div>
      <div className={style.line}>
      {keys2.map((keyValue, index) =>{return <Key key={`keys2-${index}`} keyValue={keyValue}  bigKey={false} disabled={disabledLetters.includes(keyValue)} />})}
      </div>
      <div className={style.line}>
      <Key key={"enter"} keyValue={"ENTER"} bigKey disabled={false} />
      {keys3.map((keyValue, index) =>{return <Key key={`keys3-${index}`} keyValue={keyValue} bigKey={false} disabled={disabledLetters.includes(keyValue)} />})}
      <Key key={"delete"} keyValue={"DELETE"} bigKey disabled={false} />
      </div>
      
    </div>
  )
}

export default Keyboard