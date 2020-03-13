import React from 'react'
import PlayerList from './components/PlayerList'
import {useDarkMode} from './hooks/useDarkMode'
import {ReactSVG} from 'react-svg'
import './App.css';

export default function App() {
  const [mode, setMode] = useDarkMode(false);

  const toggleDarkMode = () => {
    setMode(mode);
  }

  return (
    <div className={mode ? "App" : "App dark-mode"}>
      <h1>Women's World Cup Players<button onClick={toggleDarkMode}><ReactSVG src={mode ? "moon.svg" : "sun.svg"}/></button></h1>
      <PlayerList />
    </div>
  )
}
