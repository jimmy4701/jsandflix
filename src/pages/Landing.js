import React from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'
import styled from 'styled-components'
import LandingInfo from '../components/LandingInfo'

const Landing = (props) => {
    return(
        <Container>
            
            <Hero>
                <CustomNavbar>
                    <Logo height="3em"/>
                    <Button color="red">S'identifier</Button>
                </CustomNavbar>
                <Overlay>
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

const Hero = styled.div`
    background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/cc4aac7c-7f98-467d-a8eb-dbdd892ccc0d/FR-fr-20210208-popsignuptwoweeks-perspective_alpha_website_large.jpg');
    background-position: center;
    background-size: cover;
    height: 80vh;
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    h1 {
        color: white;
        font-size: 5em;
        margin: 0;
    }

    h2, p {
        color: white;
    }
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