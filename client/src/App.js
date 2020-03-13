import React, { Component } from 'react'
import PlayerList from './components/PlayerList'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <PlayerList />
      </div>
    )
  }
}