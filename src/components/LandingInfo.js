import React from 'react'
import styled from 'styled-components'

const LandingInfo = (props) => {
    return(
        <Container {...props}>
            <TextContainer>
                <InnerText>
                    <h3 dangerouslySetInnerHTML={{__html: props.title}} />
                    <p dangerouslySetInnerHTML={{__html: props.text}} />
                </InnerText>
            </TextContainer>
            <ImageContainer>
                <img src={props.image} />
            </ImageContainer>
        </Container>
    )
}



const TextContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: ${props => props.reverse ? "flex-start" : "flex-end"};
    color: white;
    min-height: 20vh;
    padding-right: 5em;

    h3 {
        color: white;
        font-size: 3em;
    }

    h4 {
        font-size: 2em;
        font-weight: 500;
    }
`

const InnerText = styled.div`
    flex: 1;
    max-width: 70%;
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: ${props => props.reverse ? "flex-end" : "flex-start"};

    img {
        max-width: 33em;
    }
`

const Container = styled.div`
    display: flex;
    flex-flow: ${props => props.reverse ? "row-reverse" : "row"};
    width: 100%;
    padding: 3em 0;

    ${TextContainer} {
        justify-content: ${props => props.reverse ? "flex-start" : "flex-end"};
    }

    ${ImageContainer} {
        justify-content: ${props => props.reverse ? "flex-end" : "flex-start"};
        padding-right: 3em;
    }
`

export default LandingInfo