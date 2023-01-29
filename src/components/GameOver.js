import styled from "styled-components"

const GameOverText = styled.p`
    font-size: 10em;
    font-weight: bolder;
    text-align: center;
    margin: 0.5em 0em 0.5em 0em;
`

const ReplayText = styled.p`
    font-size: 6em;
    font-weight: bold;
    text-align: center;
    margin: 0em 0em 1em 0em;
    text-decoration: underline;
    cursor: pointer;
`

const GameOver = ({resetGame}) => {
    
    const handleClick = () => {
        resetGame()
    }

    return (
        <>
            <GameOverText>You Win!!</GameOverText>
            <ReplayText onClick={handleClick}>Play again??</ReplayText>
        </>

    )

}

export default GameOver
