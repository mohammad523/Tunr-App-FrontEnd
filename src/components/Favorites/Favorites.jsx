import React from 'react'
import FavoriteSong from '../FavoriteSong/FavoriteSong'
import './Favorites.css'

const Favorites = ({ songs, toggleFavorite, deleteSong }) => {
    return (
        <>
            <h3>Favorite Songs</h3>
            <div className='favorites-container'>
            {
                songs.map(
                    (song) => {
                        return <FavoriteSong song={song} toggleFavorite={toggleFavorite} deleteSong={deleteSong} />
                    }
                )
            }
            </div>
        </>
    )
}
export default Favorites;