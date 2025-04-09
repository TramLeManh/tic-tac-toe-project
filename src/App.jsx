import { useState } from "react";
import GameBoard from "./assets/Components/GameBoard";
import Player from "./assets/Components/Player";
import Log from "./assets/Components/log";
import { WINNING_COMBINATIONS } from "./data/Win";
import GameOver from "./assets/Components/GameOver"
function App() {
  //Define state object
  //Player Components and GameOver components will use it
  const [playerName, setPlayerName] = useState({
    O: "Player1",
    X: "Player2"
  });  
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setgameTurn] = useState([]);
  const activePlayer = handlePlayer(gameTurn);
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameBoard = [...initialGameBoard.map(array=>[...array])];
  let winner;
  var hasDraw
  for (const t of gameTurn) {
    const { row, col } = t.square;
    gameBoard[row][col] = t.player;
  }
  //Spread object
  function handlePlayerName(symbol, name) {
    setPlayerName((prev) => ({
      ...prev,
      [symbol]: name
    }));
  }
  
  function handleSelectSquare(rowIndex, colIndex) {
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
      winner = gameTurn[0].player
    }
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          //Put func  handlePlayerName from parent to child
          <Player
            playerName={"Player1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
            handlePlayerName={handlePlayerName}
          ></Player>
          <Player
            playerName={"Player2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
            handlePlayerName={handlePlayerName}            
          ></Player>
        </ol>
        //Put player name win it this code
        {(winner||hasDraw)&&<GameOver winner={playerName[winner]} onRestart={handleRestart}></GameOver>}
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
