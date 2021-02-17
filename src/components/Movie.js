import React from 'react'
import styled from 'styled-components'
import MiniLogo from './MiniLogo'
import colors from '../utils/colors'
import LogoButton from './LogoButton'
import { MdPlayCircleOutline, MdCheckCircle, MdThumbUp, MdThumbDown } from 'react-icons/md'

const Movie = ({movie, ...props}) => {
    return(
        <Container className="movie">
            <ImageContainer {...props} image={movie.image} >
                {movie.netflix && <MiniLogo height="3em" />}
                {movie.top && <TopContainer>TOP<br/><span>10</span></TopContainer>}
                <Title>{movie.title}</Title>
            </ImageContainer>
            <ActionsContainer>
                <LogoButton>
                    <MdPlayCircleOutline />
                </LogoButton>
                <LogoButton>
                    <MdCheckCircle />
                </LogoButton>
                <LogoButton>
                    <MdThumbUp />
                </LogoButton>
                <LogoButton>
                    <MdThumbDown />
                </LogoButton>
            </ActionsContainer>
        </Container>

    )
}


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

const ActionsContainer = styled.div`
    background-color: ${colors.black};
    height: 3em;
    display: none;
    width: 100%;
    color: white;
    padding: 1em 0 ;

    .logo-button {
        margin: 0 0.5em 0 ;
    }
`

const ImageContainer = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 15em;
    width: 30em;
    position: relative;
    padding: 0.5em;
    transition: all 0.5s;
    border-radius: 0.5em;
    cursor: pointer;
    overflow: hidden;
`

const Container = styled.div`
    min-height: 15em;
    border-radius: 0.5em;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.3);
        z-index: 3;

        .mini-logo, ${TopContainer} {
            display: none;
        }
    }

    &:hover {
        ${ActionsContainer} {
            display: flex;
        }

        ${ImageContainer} {
            display: block;
            border-radius: 0.5em 0.5em 0 0 ;
        }
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

export default Movie