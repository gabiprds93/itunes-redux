import React from 'react';
import './App.css';
import {connect} from 'redux-zero/react'
import {play, next, stop} from './actions'

const Song = ({index, song}) => {
  let current = "";
  if(song.isPlaying)
  {
    current = "current";
  }
  return(
    <li className={current}>{song.title} - {song.artist}<span className="duration">{song.duration}</span></li>
  )
}

const App = ({songs}) => 
{
  const playList = songs.map((song, index) => {
    return ( <Song key={song.id} index={index} song={song}/>);
  })
  
  return (
    <div>
      <h1>Treetunes</h1>
      <ol id="playlist">
        {playList}
      </ol>
      <button id="play" onClick={() => play()}>Play</button>
      <button id="next" onClick={() => next()}>Next</button>
      <button id="stop" onClick={() => stop()}>Stop</button>
    </div>
  );
}

const mapToProps = ({songs}) => ({songs})

export default connect(mapToProps)(App);