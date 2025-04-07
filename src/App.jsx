import Player from "./assets/Components/Player"
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={"P1"} symbol={"X"}></Player>
          <Player playerName={"P2"} symbol={"O"}></Player>
        </ol>
        GAMEBOARD
      </div>
      LOG 
    </main>
  )
}

export default App
