import { useState } from "react";
import GameBoard from "./assets/Components/GameBoard";
import Player from "./assets/Components/Player";
import Log from "./assets/Components/log";
function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setgameTurn] = useState([]);
  const activePlayer = handlePlayer(gameTurn);
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
  function handlePlayer(gameTurn) {
    let currentPlayer = "X";
    //Nếu cái  mới nhất là X thì currentPlayer là O
    //Check conditon from left to right
    if (gameTurn.length > 0 && gameTurn[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
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
        GAMEBOARD
      </div>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        playerSymbol={activePlayer}
        turn={gameTurn}
      ></GameBoard>
      <Log turns={gameTurn}></Log>
    </main>
  );
}
export default App;
