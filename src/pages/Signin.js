import React from 'react'
import styled from 'styled-components'
import { Hero, Overlay } from '../components/Hero'
import Logo from '../components/Logo'
import SigninForm from '../components/SigninForm'

const Signin = (props) => {
    return(
        <>
            <Hero height="90vh">
                <CustomLogo height="4em" />
                <Overlay>
                    <SigninForm />
                </Overlay>
            </Hero>
        </>
    )
}

const CustomLogo = styled(Logo)`
    position: absolute;
    top: 0.2em;
    left: 1em;
`

export default Signin