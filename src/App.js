import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
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

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
