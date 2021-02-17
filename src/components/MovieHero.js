import React from 'react'
import styled from 'styled-components'
import MiniLogo from './MiniLogo'
import Button from './Button'
import { IoMdPlay } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'

const MovieHero = ({movie, ...props}) => {
    return(
        <Container {...props} movie={movie}>
            <Type>
                <MiniLogo height="2em" style={{margin: "0 0.2em 0 0"}} />{movie.type}
            </Type>
            <Title>{movie.title}</Title>
            <Description>{movie.description}</Description>
            <ButtonsContainer>
                <Button color="white" fontsize="1.5em"><IoMdPlay /> Lecture</Button>
                <Button color="white" fontsize="1.5em"><FaSearch /> En savoir plus</Button>
            </ButtonsContainer>
        </Container>
    )
}

const Container = styled.div`
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.7399334733893557) 1%, rgba(0,212,255,0) 100%);
    background-image: url(${props => props.movie.image});
    background-position: center;
    background-size: cover;
    height: ${props => props.height || "90vh"};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 0 0 3em;
    margin-bottom: -7em;
`

const Type = styled.div`
    color: white;
    display: flex;
    align-items: center;
    font-size: 2em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.3em;
`

const Title = styled.h1`
    color: white;
    margin: 0;
    font-size: 7em;
`

const Description = styled.p`
    color: white;
    margin: 0;
    font-size: 2em;
    max-width: 40%;
`

const ButtonsContainer = styled.div`
    display: flex;
    margin: 1em 0;

    button {
        margin: 0 1em 0 0 ;
    }
`

export default MovieHero