import React from 'react'
import colors from '../utils/colors'
import styled from 'styled-components'

const LogoButton = (props) => {
    return(
        <Container {...props}>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 3em;
    width: 3em;
    border-radius: 200em;
    border: 2px solid white;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    background-color: ${colors.dark_grey};

    &:hover {
        border: 2px solid black;
        color: black;
        background-color: white;
    }
`

export default LogoButton