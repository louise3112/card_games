// import Confetti from "react-confetti/dist/types/Confetti"
import ConfettiExplosion from "react-confetti-explosion"

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

    // const {width, height} = useWindowSize()

    const bigExplodeProps = {
        force: 0.6,
        duration: 5000,
        particleCount: 200,
        floorHeight: 1600,
        floorWidth: 1600
    };
    
    const handleClick = () => {
        resetGame()
        console.log("Clicked!")
    }

    return (
        <>
            {/* <Confetti /> */}
            {/* <Confetti width={width} height={height} /> */}

            {/* <GameOverText><ConfettiExplosion {...bigExplodeProps}/>You Win!!</GameOverText> */}
            <GameOverText>You Win!!</GameOverText>
            <ReplayText onClick={handleClick}>Play again??</ReplayText>
        </>

    )

}


// function Button() {
//     const [isExploding, setIsExploding] = React.useState(false);
//     console.log(1);
//     return (
//       <div style={container}>
//         <button type="button" onClick={() => setIsExploding(!isExploding)} style={button}>
//           {isExploding && (<div style={source}> <ConfettiExplosion {...bigExplodeProps} /> </div> )}
//           Explode!
//         </button>
//       </div>
//     );
//   }



export default GameOver


// import ConfettiExplosion from 'react-confetti-explosion';

// function App() {
//   const [isExploding, setIsExploding] = React.useState(false);
//   return <>{isExploding && <ConfettiExplosion />}</>;
// }


// import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'

// export default () => {
//   const { width, height } = useWindowSize()
//   return (
//     <Confetti
//       width={width}
//       height={height}
//     />
//   )
// }