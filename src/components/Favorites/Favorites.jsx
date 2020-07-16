import React from 'react'
import Song from '../Song/Song'
import './Favorites.css'

const Favorites = ({ songs, toggleFavorite, deleteSong }) => {
    return (
        <div className='favorites-container'>
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
export default Favorites;