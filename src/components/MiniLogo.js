import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const MiniLogo = (props) => {
    return(
        <CustomLogo {...props}>N</CustomLogo>
    )
}

const CustomLogo = styled.div`
    color: ${colors.red};
    font-size: ${props => props.height || "4em"};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: -0.05em;

    ${props => props.absolute && `
        position: absolute;
        top: 0.2em;
        left: 1em;
    `}
`

export default MiniLogo