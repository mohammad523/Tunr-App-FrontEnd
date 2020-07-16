import React from 'react'
import './Song.css'

const Song = ({ song, toggleFavorite, deleteSong }) => {
    if(!song) song = { _id: false, title: 'unavailable', artist: 'unavailable', time: 0, isFavorite: false }
    
    const seconds = '' + (song.time % 60);
    const time = Math.floor(song.time / 60) + ':' + (seconds.length===0?'00':seconds.length===1?'0'+seconds:seconds);

    return (
        <div className='song-container'>
            <div className='song-item song-title'>{song.title}</div>
            <div className='song-item song-artist'>{song.artist}</div>
            <div className='song-item song-time'>{time}</div>
            <button className={`song-button song-favorite ${song.isFavorite?'favorite':''}`} onClick={() => toggleFavorite(song._id)}>❤</button>
            <button className='song-button song-remove' onClick={() => deleteSong(song._id)}>X</button>
        </div>
    )
}

export default Song;