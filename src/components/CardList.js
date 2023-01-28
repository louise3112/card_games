import styled from "styled-components"
import SingleCard from "./SingleCard"

const CardsUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 3em 0em 1em 6em;
    width: 90%;
    height: 90%;
    display: grid;
    grid-template: 15% 15% 15% 15% 15% 15% / 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    & li:nth-child(12) {
        grid-column: 3 / 5;
        grid-row: 2;
    }
    & li:nth-child(42) {
        grid-column: 6 / 8;
        grid-row: 5;
    }
`

const CardList = ({listOfCards, updateDisplay}) => {

    const cardsAsJsxElements = listOfCards.map(card => {
        return <SingleCard key={card.code} card={card} updateDisplay={updateDisplay}/>
    })

    return (
        <CardsUl>
            {cardsAsJsxElements}
        </CardsUl>
    )
}

export default CardList


// Card object format:
// {
//     "code": "6H", 
//     "image": "https://deckofcardsapi.com/static/img/6H.png", 
//     "images": {
//                   "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
//                   "png": "https://deckofcardsapi.com/static/img/6H.png"
//               }, 
//     "value": "6", 
//     "suit": "HEARTS"
// }