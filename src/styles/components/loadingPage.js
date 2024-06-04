import styled, { keyframes } from "styled-components"

const FadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`



export const Section = styled.section`
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 100%;
    top: 0px;
    left: 0%;
    right: 100%;
    justify-content: center;
    align-items:center;
    height: 100vh;
    background-color: white;
    z-index:1;

    // Animação de fade-in ao montar o componente
        animation: ${FadeIn} 1s linear;


`

