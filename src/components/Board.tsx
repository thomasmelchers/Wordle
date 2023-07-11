import React from 'react'
import Letter from './Letter'
import style from './Board.module.css'



const Board = () => {
    
  return (
    <div className={style.board}>
        <div className={style.row}>
            <Letter letterPosition={0} attemptValue={0}></Letter>
            <Letter letterPosition={1} attemptValue={0}></Letter>
            <Letter letterPosition={2} attemptValue={0}></Letter>
            <Letter letterPosition={3} attemptValue={0}></Letter>
            <Letter letterPosition={4} attemptValue={0}></Letter>
        </div>
        <div className={style.row}>
            <Letter letterPosition={0} attemptValue={1}></Letter>
            <Letter letterPosition={1} attemptValue={1}></Letter>
            <Letter letterPosition={2} attemptValue={1}></Letter>
            <Letter letterPosition={3} attemptValue={1}></Letter>
            <Letter letterPosition={4} attemptValue={1}></Letter>
        </div>
        <div className={style.row}>
            <Letter letterPosition={0} attemptValue={2}></Letter>
            <Letter letterPosition={1} attemptValue={2}></Letter>
            <Letter letterPosition={2} attemptValue={2}></Letter>
            <Letter letterPosition={3} attemptValue={2}></Letter>
            <Letter letterPosition={4} attemptValue={2}></Letter>
        </div>
        <div className={style.row}>
            <Letter letterPosition={0} attemptValue={3}></Letter>
            <Letter letterPosition={1} attemptValue={3}></Letter>
            <Letter letterPosition={2} attemptValue={3}></Letter>
            <Letter letterPosition={3} attemptValue={3}></Letter>
            <Letter letterPosition={4} attemptValue={3}></Letter>
        </div>
        <div className={style.row}>
            <Letter letterPosition={0} attemptValue={4}></Letter>
            <Letter letterPosition={1} attemptValue={4}></Letter>
            <Letter letterPosition={2} attemptValue={4}></Letter>
            <Letter letterPosition={3} attemptValue={4}></Letter>
            <Letter letterPosition={4} attemptValue={4}></Letter>
        </div>
        <div className={style.row}>
            <Letter letterPosition={0} attemptValue={5}></Letter>
            <Letter letterPosition={1} attemptValue={5}></Letter>
            <Letter letterPosition={2} attemptValue={5}></Letter>
            <Letter letterPosition={3} attemptValue={5}></Letter>
            <Letter letterPosition={4} attemptValue={5}></Letter>
        </div>
    </div>
  )
}

export default Board