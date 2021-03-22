import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './addplayerform.js';
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

    //player id Counter
    prevPlayerId = 4;
    handleScoreChange = (index, delta) => {
      this.setState(prevState => ({
        score:prevState.players[index].score += delta
      }));
    }
    handleAddPlayer = (name) =>{
      this.setState({
        players:[
          ...this.state.players,
          {
            name,
            score: 0 ,
            id: this.prevPlayerId += 1
          }
        ]
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
        players={this.state.players} />

        {/*map function takes our array and create a copy in a new layout, in this case we are grabbing our player object
        and tell map to take the properties in the object and place them within a Player element, we defined earlier, as props*/}

        {/*player list */}
        {this.state.players.map( (player, index) =>
          <Player
            name = {player.name}
            score = {player.score}
            id = {player.id}
            key = {player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            remPlayer = {this.removePlayer}
          />
       )}
      <AddPlayerForm addPlayer = {this.handleAddPlayer} />
      </div>
    );
  }
}
 ReactDOM.render(
   <App/>,
   document.getElementById('root')
 );
export default App;
