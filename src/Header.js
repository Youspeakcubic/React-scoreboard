import React from 'react';
import ReactDOM from 'react-dom';
{/*Props are read only so only viables when inputting static information into elements, if you wish to dynamically add data to website we must use stateful classes.*/}
const Header = (props) => {
  console.log(props);
  return (
    <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}
export default Header;
