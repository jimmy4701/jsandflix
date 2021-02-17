import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const Logo = (props) => {
    return(
        <CustomLogo {...props}>Netflix</CustomLogo>
    )
}

const CustomLogo = styled.div`
    color: ${colors.red};
    font-size: ${props => props.height || "2em"};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: -0.05em;
`

export default Logo