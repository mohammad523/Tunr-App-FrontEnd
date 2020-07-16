import React from 'react';
import { Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.jsx'
import Axios from 'axios';

function App() {
  const [faves, setFaves] = useState(false)

  toggleFavorite = (e) => {
    e.preventDefault()

    Axios({
      url: `https://tunr4.herokuapp.com/api/songs/${props.match.params.id}`,
      method: 'PUT',
      data: song
    })
      .then(() => setFaves(true))
      .catch(console.error)
  }
  // Not sure if you want this functionality.
  // if (faves) {
  //   return <Redirect to={`/songs/${props.match.params.id}`} />
  // }

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
