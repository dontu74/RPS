import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor () {
    super();
    this.signs = ["rock", "scissors", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
      playerThree: "paper"
    }
  }



  render () {
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne} />
          <PlayerCard sign={this.state.playerTwo} />

        </div>
        <div className="winner">Here is the winner</div>
        <button class="play" type="button" onClick="">Play Game</button>



      </div>
    )

  }
}
export default Game; // Must use export
