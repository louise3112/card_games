import styled from "styled-components"

const Title = styled.h1`
    font-size: 5em;
    margin: 0.5em 0em 0em 0em;
`

const Header = ({titleText}) => {
    return (
        <Title>{titleText}</Title>
    )
}

export default Header
