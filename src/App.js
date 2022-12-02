// Components
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
// CSS
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>
      <Board />
    </div>
  );
}

// export default App;
