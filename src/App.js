import { useState } from 'react';
import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Playing from './components/Playing';
import { Songs } from './Context';
import DataSong from "./data/songs.json"

function App() {
  const [song, setSong] = useState(DataSong[0])

  function handleSetSong(idSong) {
    const currentSong = DataSong.find(song => song.id === idSong)
    if (!currentSong) {
      setSong(DataSong[0])
    }
    else
      setSong(currentSong)
  }

  return (
    <div className="App">
      <Songs.Provider value={{ DataSong, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-emerald-600 h-screen-navbar-player'>
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
