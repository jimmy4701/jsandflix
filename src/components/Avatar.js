import React from 'react'
import styled from 'styled-components'

const Avatar = ({image, ...props}) => {
    return(
        <CustomImage src={image} {...props}/>
    )
}

const CustomImage = styled.img`
    height: ${props => props.height || "2em"};
    width: ${props => props.height || "2em"};
`

export default Avatar