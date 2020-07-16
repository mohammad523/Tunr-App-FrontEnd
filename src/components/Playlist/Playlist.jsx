import React from 'react'
import Song from '../Song/Song'
import './Playlist.css'

const Playlist = ({ songs, toggleFavorite, deleteSong }) => {
    return (
        <div className='playlist-container'>
        {
            songs.map(
                (song) => {
                    return <Song toggleFavorite={toggleFavorite} deleteSong={deleteSong} />
                }
            )
        }
        </div>
    )
}
export default Playlist;