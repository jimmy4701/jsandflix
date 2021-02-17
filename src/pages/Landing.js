import React from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'
import styled from 'styled-components'
import LandingInfo from '../components/LandingInfo'
import {Hero, Overlay} from '../components/Hero'
import { Link } from 'react-router-dom'

const Landing = (props) => {
    return(
        <Container>
            
            <Hero>
                <CustomNavbar>
                    <Logo height="3em"/>
                    <Link to="/signin">
                        <Button color="red">S'identifier</Button>
                    </Link>
                </CustomNavbar>
                <Overlay center>
                    <h1>Films, séries TV et bien<br/>plus en illimité.</h1>
                    <h2>Où que vous soyez. Annulez à tout moment</h2>
                    <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
                    <InputContainer>
                        <Input placeholder="Adresse e-mail"/>
                        <Button color="red" >Commencer</Button>
                    </InputContainer>
                </Overlay>
            </Hero>
            <LandingInfo 
                title="Regardez Netflix sur<br/>votre TV." 
                text="Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus."
                image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <LandingInfo
                reverse
                title="Téléchargez vos séries préférées pour les regarder hors connexion." 
                text="Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder."
                image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <LandingInfo 
                title="Où que vous soyez." 
                text="Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris."
                image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            />
        </Container>
    )
}

const Container = styled.div`
    
`

const CustomNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    z-index: 100;
`



const InputContainer = styled.div`
    display: flex;
    width: 40vw;

    input {
        flex: 3;
        font-size: 1.1em;
    }

    button {
        flex: 1;
    }
`

export default Landing