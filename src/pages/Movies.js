import React from 'react'
import Navbar from '../components/Navbar'
import MovieHero from '../components/MovieHero'
import { movies } from '../config'

const Movies = (props) => {
    return(
        <>
            <Navbar />
            <MovieHero movie={movies[0]} />
        </>
    )
}

export default Movies