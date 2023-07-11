import React from 'react'
import { useAppContext } from '../context/AppContext'
import style from './Key.module.css'

interface Props {
    keyValue: string,
    bigKey: boolean,
    disabled: boolean
}

const Key: React.FC<Props> = ({ keyValue, bigKey, disabled}) => {


    const { onSelect, onDelete, onEnter } = useAppContext()
    const isBig = bigKey? `${style.big}` : disabled? `${style.disabled}` : "";

    const selectedLetter = () => {
      if (keyValue === "ENTER"){
       onEnter()
      } else if (keyValue === "DELETE"){
        onDelete()
      } else{
        onSelect(keyValue)
      }
        
    }

  return (
    <div className={style.key} id={isBig} onClick={selectedLetter}>{keyValue} </div>
  )
}

export default Key