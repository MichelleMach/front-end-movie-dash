import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    padding-top: 15vh;
    justify-content: space-around;
    background-color: #e73c7e;
    height: 100vh;
`

export const ButtonDiv = styled.div`
    display: flex;
    position: absolute;
    top: 90px;
    left: 50px;
    width: 80px;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`

export const ImageButton = styled.img`
    width: 15px;
    height: 15px;
`

export const Button = styled.p`
    color: black;
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
    color: white;
    border: 1px white solid;
    border-radius: 20px;
    max-width: 10em;
`

export const TitleFilme = styled.h2`
    font-size: 2em;
    text-align: start;
    padding: 20px 0px 5px 0px;
    color: white;
`

export const SinopseFilme = styled.p `
    font-size: 1.3em;
    text-align: start;
    color: white;
    padding: 0px 0px 20px 0px;
`

export const DiretorFilme = styled.p `
    color: white;
    padding: 0 0 5px 0;
    font-size: 1em;
    max-width: 11em; 
    max-height: 8em; 
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
`

export const AtoresFilme = styled.p `
    color: white;
    padding: 0 0 5px 0;
    font-size: 1em;
    max-width: 15em; 
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
`

export const AnoFilme = styled.p `
    color: white;
    font-size: 1em;
`