import React from 'react'
import Song from '../Song/Song'
import './Playlist.css'

const Playlist = ({ songs, toggleFavorite, deleteSong }) => {
    return (
        <>
            <h3>Playlist</h3>
            <div className='playlist-container'>
            {
                songs.map(
                    (song) => {
                        return <Song song={song} toggleFavorite={toggleFavorite} deleteSong={deleteSong} />
                    }
                )
            }
            </div>
        </>
    )
}
export default Playlist;