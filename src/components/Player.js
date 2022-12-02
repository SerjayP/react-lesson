function Player(props) {
    return (
      <div>
        <h2>Player {props.whichPlayer}</h2>
        <h3>Wins: {Math.floor(Math.random() * 6)}</h3>
      </div>
    )
  }
  
  export default Player