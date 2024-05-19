import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
`

export const Poster = styled.img`
    max-width:450px;
    max-height:400px;
    width: auto;
    height: auto;
`

export const CategoryRating = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const InfosFilme = styled.article `
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 30em;
`

export const GeneroFilme = styled.p `
    font-size: 1em;
    padding: 5px 10px;
    text-align: center;
    color: #04868B;
    border: 1px #04868B solid;
    border-radius: 20px;
    max-width: 10em;
`

export const TitleFilme = styled.h2`
    font-size: 2em;
    text-align: start;
    color: #04868B;
`

export const SinopseFilme = styled.p `
    font-size: 1.3em;
    text-align: start;
    color: gray;
`

export const DiretorFilme = styled.p `
    color: gray;
    font-size: 1em;
    max-width: 11em; 
    max-height: 8em; 
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
`

export const AtoresFilme = styled.p `
    color: gray;
    font-size: 1em;
    max-width: 15em; 
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
`

export const AnoFilme = styled.p `
    color: gray;
    font-size: 1em;
`