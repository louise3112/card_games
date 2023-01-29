import styled from "styled-components"

const FooterText = styled.p`
    font-size: 1.2em;
    margin: 0em 0em 0.75em 0em;
`

const FooterLink = styled.a`
    color: white;
    cursor: pointer;
`

const Footer = () => {
    return (
        <FooterText>Card decks from <FooterLink href="https://www.deckofcardsapi.com/">Deck of Cards API</FooterLink> &nbsp;&nbsp;|&nbsp;&nbsp; Back of card image created by <FooterLink href="https://www.flaticon.com/free-icons/playing-card">Krystsina Mikhailouskaya - Flaticon</FooterLink></FooterText>
    )
}

export default Footer
