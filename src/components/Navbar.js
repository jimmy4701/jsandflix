import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'

const Navbar = (props) => {
    return(
        <Container>
            <LeftPart>
                <Logo />
            </LeftPart>
            <RightPart>

            </RightPart>
        </Container>
    )
}

const Container = styled.div``
const LeftPart = styled.div``
const RightPart = styled.div``

export default Navbar