import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    return(
        <CustomInput {...props} />
    )
}

const CustomInput = styled.input`
    border: none;
    padding: 1em;
`

export default Input