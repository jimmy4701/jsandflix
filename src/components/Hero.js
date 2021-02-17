import styled from 'styled-components'

export const Hero = styled.div`
    background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/cc4aac7c-7f98-467d-a8eb-dbdd892ccc0d/FR-fr-20210208-popsignuptwoweeks-perspective_alpha_website_large.jpg');
    background-position: center;
    background-size: cover;
    height: ${props => props.height || "80vh"};
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: ${props => props.center ? "center" : "inherit"};
    
    h1 {
        color: white;
        font-size: 5em;
        margin: 0;
    }

    h2, p {
        color: white;
    }
`