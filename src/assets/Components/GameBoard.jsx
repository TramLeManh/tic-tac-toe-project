import { useState } from "react";

//GameBoard đang quản lý selectSquare. Nên cần để state ở upper cao hơn
export default function GameBoard({onSelectSquare,GameBoard}) {
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
            {GameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button 
                                    onClick={() => {
                                        if (GameBoard[rowIndex][colIndex] === null) {
                                            onSelectSquare(rowIndex, colIndex);
                                        }
                                    }}
                                    disabled={GameBoard[rowIndex][colIndex] !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
