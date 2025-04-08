import { useState } from "react"
import GameBoard from "./assets/Components/GameBoard"
import Player from "./assets/Components/Player"
function App() {
  const[activePlayer, setActivePlayer] = useState('X');
  const [gameTurn,setgameTurn] = useState([]);

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curPlayer)=> curPlayer==='X' ? 'O' :'X')
    setgameTurn(prev=>{
      let currentPlayer ='X'
      //Nếu cái  mới nhất là X thì currentPlayer là O
      if(prev[0].player==='X'&& prev.length>0){
        currentPlayer='O';
      }
      //Để element prev ở cuối và thêm cái mới nhất lên đầu
      const updateTurns=[{square:{row:rowIndex,col:colIndex},player:activePlayer},...prev];
      return updateTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName={"P1"} symbol={"X"} isActive={activePlayer==='X'}></Player>
          <Player playerName={"P2"} symbol={"O"} isActive={activePlayer==='O'}></Player>
        </ol>
        GAMEBOARD
      </div>
      <GameBoard onSelectSquare={handleSelectSquare} playerSymbol={activePlayer} ></GameBoard>
    </main>
  )
}

export default App
