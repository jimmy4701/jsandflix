import React from 'react'
import styled from 'styled-components'

const ProfileAvatar = ({image, name, ...props}) => {
    return(
        <Container {...props}>
            <img src={image} />
            <Name>{name}</Name>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em;
    cursor: pointer;

    img {
        height: 11em;
        border: 2px solid rgba(0,0,0,0);

        &:hover{
            border: 2px solid white;
        }
    }
`

const Name = styled.div`
    color: grey;
    font-size: 1.5em;
`

export default ProfileAvatar