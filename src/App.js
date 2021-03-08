import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Player from './Player';
{/*We use prevstate as mutating current state data is not the best practice as it does not mean react will make the changes as soon as the function runs,
by getting the previous state and changing it within the function we can make fun it is changed.*/}
class App extends React.Component {
  state = {
    players : [
          {
          name: "Guil",
          score: 0,
          id: 1
        },
        {
          name: "Treasure",
          score: 0,
          id: 2
        },
        {
          name: "Ashley",
          score: 0,
          id:3
        },
        {
          name: "James",
          score:0,
          id: 4
        }
      ]
    };
    handleScoreChange(delta , id){
      this.setState( prevState => {
        return {
          players: players.filter()
        };
      });
    }
    removePlayer = (id) => {
      this.setState( prevState => {
        return {
        players:prevState.players.filter( p => p.id !== id)
      };
    });
  }
  render(){
    return (
      <div className = "scoreboard">
        <Header
        title="Scoreboard"
        totalPlayers = {this.state.players.length} />

        {/*map function takes our array and create a copy in a new layout, in this case we are grabbing our player object
        and tell map to take the properties in the object and place them within a Player element, we defined earlier, as props*/}

        {/*player list */}
        {this.state.players.map( player =>
          <Player
            name = {player.name}
            score = {player.score}
            id = {player.id}
            key = {player.id.toString()}
            changeScore={this.handleScoreChange}
            remPlayer = {this.removePlayer}
          />
       )}
      </div>
    );
  }
}
 ReactDOM.render(
   <App/>,
   document.getElementById('root')
 );
export default App;
