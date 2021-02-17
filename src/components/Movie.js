import React from 'react'
import styled from 'styled-components'
import MiniLogo from './MiniLogo'
import colors from '../utils/colors'

const Movie = ({movie, ...props}) => {
    return(
        <Container {...props} image={movie.image} className="movie">
            {movie.netflix && <MiniLogo height="3em" />}
            {movie.top && <TopContainer>TOP<br/><span>10</span></TopContainer>}
            <Title>{movie.title}</Title>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 15em;
    width: 30em;
    position: relative;
    padding: 0.5em;
    border-radius: 0.5em;
    transition: all 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: scale(1.3);
        z-index: 3;
    }
`

const Title = styled.div`
    position: absolute;
    color: white;
    font-size: 2em;
    max-width: 100%;
    bottom: 0.5em;
    left: 0.5em;
    font-weight: bold;
`

const TopContainer = styled.div`
    background-color: ${colors.red};
    color: white;
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.5em;
    text-align: center;

    span {
        font-size: 1.2em;
    }
`

export default Movie