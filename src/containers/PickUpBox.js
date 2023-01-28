import { useState, useEffect } from "react"

import PickUpIntro from "../components/PickUpIntro"
import CardList from "../components/CardList"
import GameOver from "../components/GameOver"
import Footer from "../components/Footer"

import styled from "styled-components"

const PickUpStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const PickUpBox = () => {

    const [allCards, setAllCards] = useState([])
    const [cardsDisplayed, setCardsDisplayed] = useState(52)

    const updateDisplay = (cardClicked) => {
        const cardIndex = allCards.findIndex(card => card.code === cardClicked.code)
        const updatedCard = {...cardClicked}
        updatedCard.display = false
        const updatedList = [...allCards]
        updatedList[cardIndex] = updatedCard
        setAllCards(updatedList)
        setCardsDisplayed(cardsDisplayed-1)
    }

    const resetGame = () => {
        setCardsDisplayed(52)

        const resetCardList = allCards.map(card => {
            return {...card, display: true}
        })
        setAllCards(resetCardList)
    }

    const fetchDeck = () => {
        fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(response => response.json())
                .then(data => drawAllCards(data.deck_id))
    }

    const drawAllCards = (deckID) => {
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)
            .then(response => response.json())
                .then(data => {
                    const cardsList = data.cards.map( card => {
                        return { ...card, rotation: `${Math.random()}turn`, display: true }
                    })
                    setAllCards(cardsList)
                })
    }

    useEffect( () => {
        fetchDeck()
    }, [])

    return (
        <PickUpStyle>
            <PickUpIntro />
            <GameOver resetGame={resetGame}/>
            {/* {cardsDisplayed ? <CardList listOfCards={allCards} updateDisplay={updateDisplay}/> : <GameOver resetGame={resetGame}/>} */}
            <Footer />
        </PickUpStyle>
    )
}

export default PickUpBox
