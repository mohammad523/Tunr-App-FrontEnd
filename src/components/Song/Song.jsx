import React from 'react'
import './Song.css'

const Song = ({ song }) => {
    return (
        <div className='song-container'>
            <div className='song-item song-title'>Really Long Song Title to Test the Text Overflow</div>
            <div className='song-item song-artist'>The Abominable Kay</div>
            <div className='song-item song-time'>2:45</div>
            <button className='song-button song-favorite'>❤</button>
            <button className='song-button song-remove'>X</button>
        </div>
    )
}

export default Song;