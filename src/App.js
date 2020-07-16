import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header.jsx'
import NewSong from './components/NewSong/NewSong.jsx'
import axios from "axios";


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
  
  toggleFavorite = (id) => {
    // e.preventDefault()

    Axios({
      url: `https://tunr4.herokuapp.com/api/songs/${id}`,
      method: 'PUT',
      data: song
    })
      .then(() => setFaves(!faves))
      .catch(console.error)
  }
  
  return (
    <div className="App">
      <Header />
      <NewSong />
    </div>
  );
}

export default App;
