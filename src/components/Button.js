import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const Button = (props) => {
    return(
        <CustomButton {...props}>
            {props.children}
        </CustomButton>
    )
}

const CustomButton = styled.button`
    padding: 0.5em 1em;
    font-size: 1.1em;
    border: none;
    border-radius: 0.2em;
    cursor: pointer;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);

    ${props => props.color == 'red' && `
        color: white;
        background-color: #e50914;
    `}
`

export default Button