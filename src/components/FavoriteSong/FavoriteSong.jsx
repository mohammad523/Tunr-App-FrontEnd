import React from 'react'
import './FavoriteSong.css'

const FavoriteSong = ({ song, toggleFavorite }) => {
    if(!song) song = { _id: false, title: 'unavailable', artist: 'unavailable', time: 0, isFavorite: false }
    
    const seconds = '' + (song.time % 60);
    const time = Math.floor(song.time / 60) + ':' + (seconds.length===0?'00':seconds.length===1?'0'+seconds:seconds);

    return (
        <div className='song-container'>
            <div className='song-item song-title'>{song.title}</div>
            <div className='song-item song-artist'>{song.artist}</div>
            <div className='song-item song-time'>{time}</div>
            <button className={`song-button song-favorite ${song.isFavorite?'favorite':''}`} onClick={() => toggleFavorite(song._id)}>❤</button>
        </div>
    )
}

export default FavoriteSong;