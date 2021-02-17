import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'

const MoviesList = ({title, movies, ...props}) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Movies>
                {movies.map((movie, index) => {
                    return <Movie movie={movie} key={movie.title} />
                })}
            </Movies>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 1em;
`
const Title = styled.h3`
    color: white;
    font-size: 3em;
    margin:  0 0 0.5em 0 ;
`
const Movies = styled.div`
    display: inline-flex;
    
    .movie {
        margin: 0 1em 0 0 ;
    }
`

export default MoviesList