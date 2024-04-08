import styled from "styled-components"

export const Header = styled.header `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
`

export const Logo = styled.h2`
    color: #04868B;
    width: 20%;
    height: auto;
    margin: 1rem 1rem 2rem 2rem; 
    vertical-align: baseline;
`

export const HeaderItens = styled.ul `
    display: flex;
    text-align: center;
    list-style-type: none;
`

export const HeaderItem = styled.li `
    display: flex;
    justify-content: space-around;
    margin: 1rem 1rem 3rem 1rem;
`