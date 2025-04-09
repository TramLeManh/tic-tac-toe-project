import { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
//GameBoard đang quản lý selectSquare. Nên cần để state ở upper cao hơn
export default function GameBoard({onSelectSquare,turn}) {
    let gameBoard= initialGameBoard
    for(const t of turn){
        const {row,col} = t.square;
        gameBoard[row][col]=t.player;
    }
    // function handleSelectSquare(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex]=playerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>{onSelectSquare(rowIndex,colIndex)}}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
