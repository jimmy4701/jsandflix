import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'
import { FaSearch, FaBell } from 'react-icons/fa'
import { HiOutlineGift } from 'react-icons/hi'
import Avatar from '../components/Avatar'
import {profiles} from '../config'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <Container {...props}>
            <LeftPart>
                <Link to="/">
                    <CustomLogo height="2.5em" />
                </Link>
                <NavbarLink active>Accueil</NavbarLink>
                <NavbarLink>Séries</NavbarLink>
                <NavbarLink>Films</NavbarLink>
                <NavbarLink>Nouveautés les plus regardées</NavbarLink>
                <NavbarLink>Ma Liste</NavbarLink>
                <NavbarLink>Revoir</NavbarLink>
            </LeftPart>
            <RightPart>
                <NavbarLink active><FaSearch /></NavbarLink>
                <NavbarLink>DIRECT</NavbarLink>
                <NavbarLink>JEUNESSE</NavbarLink>
                <NavbarLink active><HiOutlineGift  /></NavbarLink>
                <NavbarLink active><FaBell  /></NavbarLink>
                <NavbarLink active><Avatar image={profiles[0].image}  /></NavbarLink>
            </RightPart>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    svg {
        height: 1.3em;
        width: 1.3em;
    }
`
const CustomLogo = styled(Logo)`
    margin: 0 1em 0 2em;
`
const LeftPart = styled.div`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start ;
`
const RightPart = styled.div`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-end ;
`
const NavbarLink = styled.div`
    color: white;
    margin: 0 1em;
    cursor: pointer;
    ${props => props.active && "font-weight: bold;"}
`

export default Navbar