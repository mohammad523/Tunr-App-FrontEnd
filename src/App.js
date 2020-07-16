
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Playlist from './components/Playlist/Playlist'
import Favorites from './components/Favorites/Favorites'
import Header from './components/Header/Header.jsx'
import NewSong from './components/NewSong/NewSong.jsx'




function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(`https://tunr4.herokuapp.com/api/songs/`);
        setSongs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  return (
    <div className="App">
      <Header />
      <Playlist songs={songs} />
      <Favorites songs={songs.filter(song=>song.isFavorite)}/>
      <NewSong />
    </div>
  );
}

export default App;
