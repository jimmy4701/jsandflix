import React from 'react'
import Navbar from '../components/Navbar'
import MovieHero from '../components/MovieHero'
import MoviesList from '../components/MoviesList'
import { movies } from '../config'

const Movies = (props) => {
    return(
        <>
            <Navbar />
            <MovieHero movie={movies[1]} />
            <MoviesList movies={movies} title="Ma Liste" />
        </>
    )
}

export default Movies