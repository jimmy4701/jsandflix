import React from 'react'
import Input from './Input'
import Button from './Button'
import styled from 'styled-components'
import colors from '../utils/colors'

const SigninForm = (props) => {
    return(
        <Container>
            <h2>S'identifier</h2>
            <CustomForm>
                <Input rounded dark placeholder="E-mail ou numéro de téléphone" />
                <Input rounded dark placeholder="Mot de passe" />
                <Button>S'identifier</Button>
            </CustomForm>
            <LinksContainer>
                <Remember>
                    <input type="checkbox" checked />
                    <p>Se souvenir de moi</p>
                </Remember>
                <div>
                    Besoin d'aide ?
                </div>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.black};
    padding: 3em;
`

const CustomForm = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 20vw;

    input {
        margin: 0 0 2em;
    }
`

const LinksContainer = styled.div`
    
`

const Remember = styled.div`
    display: flex;
    padding-top: 1em;

    p {
        margin: 0 0 0 0.5em;;
    }

    input {
        background-color: white;
        color: black;
    }
`

export default SigninForm