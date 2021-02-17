import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'

const Navbar = (props) => {
    return(
        <Container>
            <LeftPart>
                <CustomLogo height="2.5em" />
                <NavbarLink active>Accueil</NavbarLink>
                <NavbarLink>Séries</NavbarLink>
                <NavbarLink>Films</NavbarLink>
                <NavbarLink>Nouveautés les plus regardées</NavbarLink>
                <NavbarLink>Ma Liste</NavbarLink>
                <NavbarLink>Revoir</NavbarLink>
            </LeftPart>
            <RightPart>

            </RightPart>
        </Container>
    )
}

const Container = styled.div``
const CustomLogo = styled(Logo)`
    margin: 0 1em 0 2em;
`
const LeftPart = styled.div`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start ;
`
const RightPart = styled.div``
const NavbarLink = styled.div`
    color: white;
    margin: 0 1em;
    cursor: pointer;
    ${props => props.active && "font-weight: bold;"}
`

export default Navbar