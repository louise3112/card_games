import styled from "styled-components"

const CardItem = styled.li`
    width: 6em;
    height: 8em;
`

const CardPicture = styled.img`
    width: 8em;
    height: 10em;
    rotate: ${(props) => props.rotation};
`

const SingleCard = ({card, updateDisplay}) => {

    const handleClick = () => {
        updateDisplay(card)
    }

    return (
        <CardItem rotation={card.rotation}>
            {card.display ? <CardPicture src={card.image} alt={`${card.value} of ${card.suit}`} rotation={card.rotation} onClick={handleClick} value={card.code}/> : <p>&nbsp;</p>}
        </CardItem>
    )
}

export default SingleCard


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
//     "rotation": "randIntturn"
//     "display": "true"
// }
