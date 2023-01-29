import backOfCard from "../images/backOfCard.png"

import styled from "styled-components"

const StartGameContainer = styled.div`
    text-align: center;
`

const Instructions = styled.p`
    font-size: 2em;
    margin: 0em 0em 1em 0em;
`

const DeckImage = styled.img`
    height: 30em;
    width: auto;
    margin: 0em 0em 2em 0em;
`

const StartGame = ({instructions, startGame}) => {

    const handleClick = () => {
        startGame()
    }

    return (
        <StartGameContainer>
            <Instructions>{instructions}</Instructions>
            <DeckImage src={backOfCard} alt="Picutre of the top of a deck of cards" onClick={handleClick}/>
        </StartGameContainer>
    )
}

export default StartGame