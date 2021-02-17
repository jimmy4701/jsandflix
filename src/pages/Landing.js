import React from 'react'
import Logo from '../components/Logo'
import styled from 'styled-components'

const Landing = (props) => {
    return(
        <>
            <CustomNavbar>
                <Logo />
            </CustomNavbar>
        </>
    )
}

const CustomNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default Landing