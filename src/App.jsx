import { useState } from "react";
import GameBoard from "./assets/Components/GameBoard";
import Player from "./assets/Components/Player";
import Log from "./assets/Components/log";
import { WINNING_COMBINATIONS } from "./data/Win";
import GameOver from "./assets/Components/GameOver"
function App() {

  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setgameTurn] = useState([]);
  const activePlayer = handlePlayer(gameTurn);
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameBoard = initialGameBoard;
  let winner;
  var hasDraw
  for (const t of gameTurn) {
    const { row, col } = t.square;
    gameBoard[row][col] = t.player;
  }
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
    setgameTurn((prev) => {
      let currentPlayer = handlePlayer(prev);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updateTurns;
    });
  }
  function handleRestart(){
    gameBoard=initialGameBoard
    setgameTurn([])
    winner=hasDraw=null
  }
  function handlePlayer(gameTurn) {
    let currentPlayer = "X";
    //Nếu cái  mới nhất là X thì currentPlayer là O
    //Check conditon from left to right
    if (gameTurn.length > 0 && gameTurn[0].player === "X") {
      currentPlayer = "O";
    }
    if(gameTurn.length===9){
      hasDraw=true
    }
    return currentPlayer;
  }
  for (const w of WINNING_COMBINATIONS) {
    const first = gameBoard[w[0].row][w[0].column]
    const second = gameBoard[w[1].row][w[1].column]
    const third = gameBoard[w[2].row][w[2].column]
    if (first && first === second & second === third) {
      winner = first
    }
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={"P1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            playerName={"P2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        {(winner||hasDraw)&&<GameOver winner={winner} onRestart={handleRestart}></GameOver>}
        <GameBoard
        onSelectSquare={handleSelectSquare}
        playerSymbol={activePlayer}
        GameBoard={gameBoard}
      ></GameBoard>

      </div>
      
      
      
      <Log turns={gameTurn}></Log>
    </main>
  );
}
export default App;
