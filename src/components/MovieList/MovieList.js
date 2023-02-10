import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css'
const MovieList = ({list}) => {
    return (
        <div className="movieList">
            {list.map((el) => (
                <MovieCard key={el.id} {...el} />
            ))
            }
        </div>
    )
}

export default MovieList;
