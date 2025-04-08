import { useState } from "react"
import GameBoard from "./assets/Components/GameBoard"
import Player from "./assets/Components/Player"
function App() {
  const[activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((curPlayer)=> curPlayer==='X' ? 'O' :'X')
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
