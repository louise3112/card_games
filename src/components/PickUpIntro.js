import styled from "styled-components"

const IntroSection = styled.div`
    text-align: center;
`

const IntroHeading = styled.h1`
    font-size: 5em;
    margin: 0.25em 0em 0.25em 0em;
`

const IntroText = styled.p`
    font-size: 2em;
    margin: 0em 0em 0.5em 0em;
`

const PickUpIntro = () => {
    return (
        <IntroSection>
            <IntroHeading>52 Card Pick Up</IntroHeading>
            <IntroText>Pick up all the cards as fast as you can... Go!!</IntroText>
        </IntroSection>
    )
}

export default PickUpIntro