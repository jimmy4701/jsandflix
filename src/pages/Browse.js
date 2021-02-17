import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import Logo from '../components/Logo'
import ProfileAvatar from '../components/ProfileAvatar'
import { profiles } from '../config.js'
import { useHistory } from 'react-router-dom'

const Browse = (props) => {
    const history = useHistory()
    
    return(
        <Container>
            <Logo absolute height="3em"/>
            <h1>Qui est-ce ?</h1>
            <Profiles>
                {profiles.map((profile, index) => {
                    return <ProfileAvatar {...profile} key={index} onClick={() => history.push('/movies')} />
                })}
            </Profiles>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.black};
    color: white;

    h1 {
        font-size: 3em;
    }
`

const Profiles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export default Browse