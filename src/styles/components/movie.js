import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    
    width: 30%;
    padding: 20px;
    
`

export const Poster = styled.img`
    max-width:350px;
    max-height:300px;
    width: auto;
    height: auto;
`

export const InfosFilme = styled.article `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    max-width:12rem;
    background-color: #04868B;
    border-radius: 0px 30px 30px 0px;

`

export const AnoFilme = styled.p `
    color: white;
    font-size: 1rem;
`

export const TitleFilme = styled.h2`
    font-size: 1.5rem;
    text-align: start;
    color: white;
`

export const DiretorFilme = styled.p `
    color: white;
    font-size: 0.8rem;
    max-width: 11rem; 
    max-height: 8rem; 
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;

`

export const AtoresFilme = styled.p `
    color: white;
    font-size: 0.8rem;
    max-width: 11rem; 
    max-height: 8rem; 
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;

`

export const GeneroFilme = styled.p `
    color: #142529;
    font-size: 0.7rem;
    padding: 3px;
    text-align: center;
    background-color: white;
`