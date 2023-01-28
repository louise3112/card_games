import styled from "styled-components"

const GameOverText = styled.p`
    font-size: 10em;
    font-weight: bolder;
    text-align: center;
`

const GameOver = () => {

    return (
        <GameOverText>You Win!!</GameOverText>
    )

}

export default GameOver