import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const Input = (props) => {
    return(
        <CustomInput {...props} />
    )
}

const CustomInput = styled.input`
    border: none;
    padding: 1em;
    ${props => props.rounded && "border-radius: 0.2em;"}
    ${props => props.dark && `background-color: ${colors.dark_grey};`}
`

export default Input