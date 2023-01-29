import { useState, useEffect } from "react"

import Header from "../components/Header"
import StartGame from "../components/StartGame"
import CardList from "../components/CardList"
import GameOver from "../components/GameOver"
import Footer from "../components/Footer"

import styled from "styled-components"

const PickUpStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const PickUpBox = () => {

    const [gameInProgress, setGameInProgress] = useState(false)
    const [allCards, setAllCards] = useState([])
    const [cardsDisplayed, setCardsDisplayed] = useState(52)

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

    const startGame = () => {
        setGameInProgress(true)
    }

    const pickUpGame = () => {
        if (cardsDisplayed) {
            return <CardList listOfCards={allCards} updateDisplay={updateDisplay}/>
        } else {
            return <GameOver resetGame={resetGame}/>
        }
    }

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
        setGameInProgress(false)
        setCardsDisplayed(52)

        const resetCardList = allCards.map(card => {
            return {...card, display: true}
        })
        setAllCards(resetCardList)
    }

    return (
        <PickUpStyle>
            <Header titleText="52 Card Click-Up"/>
            {!gameInProgress ? 
                <StartGame instructions="Pick up all the cards as fast as you can... Click the deck to start!!" startGame={startGame}/> :
                pickUpGame()}
            <Footer />
        </PickUpStyle>
    )
}

export default PickUpBox
