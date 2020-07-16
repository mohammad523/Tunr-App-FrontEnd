import React, { useState } from 'react'
import axios from 'axios'



function NewSong() {
    const [title, setTitle] = useState("");
    const [value, setValue] =useState("")
    const [artist, setArtist] = useState("")
    const [time, setTime] = useState("")
    const [data, setData] = useState([])
    const [song, setSong] = useState([])

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleArtistChange = (event) => {
        setArtist(event.target.value)
    }
    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newSong = {
            "isFavorite": false,
            "title": title,
            "artist": artist,
            "time": time,
            }
            setData([...data, newSong])
            console.log(newSong)
            console.log('data', data)

            axios({
                url: `https://tunr4.herokuapp.com/api/songs/`,
                method: "POST",
                data: newSong,
              })
                .then((res) => {
                  setSong({ createdSong: res.data });
                })
                .catch(console.error);

    }




    

    return(
    <>
        <h4>Add A New Song</h4>
        <form onSubmit={handleSubmit}>  
            <p>Title</p>          
            <input type="text" value={title} onChange={handleTitleChange} id="title"/>
            <br />
            <p>Artist</p>          
            <input type="text" value={artist} onChange={handleArtistChange} id="artist"/>
            <br />
            <p>Time</p>          
            <input type="text" value={time} onChange={handleTimeChange} id="time"/>
            <br />
            <input type="submit" />
        </form>


    </>
    )
}

export default NewSong