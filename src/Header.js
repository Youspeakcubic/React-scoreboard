import React from 'react';
import ReactDOM from 'react-dom';
import Stats from './stats.js'
{/*Props are read only so only viables when inputting static information into elements, if you wish to dynamically add data to website we must use stateful classes.*/}
const Header = (props) => {
  return (
    <header>
    <Stats
    players={props.players}
     />
    <h1>{props.title}</h1>
    </header>
  );
}
export default Header;
