import React, {useCallback} from 'react'
import Input from './Input'
import Button from './Button'
import styled from 'styled-components'
import colors from '../utils/colors'
import { useHistory } from 'react-router-dom'

const SigninForm = (props) => {

    const history = useHistory()

    const goMovies = useCallback((e) => {
        e.preventDefault()
        history.push('/movies')
    }, [])
    
    return(
        <Container>
            <h2>S'identifier</h2>
            <CustomForm onSubmit={goMovies}>
                <Input rounded dark placeholder="E-mail ou numéro de téléphone" />
                <Input rounded dark placeholder="Mot de passe" />
                <Button color="red">S'identifier</Button>
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

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 20vw;

    input {
        margin: 0 0 2em;
    }
`

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    padding-top: 1em;
`

const Remember = styled.div`
    display: flex;

    p {
        margin: 0 0 0 0.5em;;
    }

    input {
        background-color: white;
        color: black;
    }
`

export default SigninForm