import styled from "styled-components"

const FooterText = styled.p`
    font-size: 1.5em;
    margin: 0em 0em 0.75em 0em;
`

const FooterLink = styled.a`
    color: white;
    cursor: pointer;
`

const Footer = () => {
    return (
        <FooterText>Using card decks from <FooterLink href="https://www.deckofcardsapi.com/">Deck of Cards API</FooterLink></FooterText>
    )
}

export default Footer