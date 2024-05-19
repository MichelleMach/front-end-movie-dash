import React, { useState } from "react";
import * as Styled from '../styles/components/movie';
import { useSelector } from "react-redux";
import ErrorMessage from "../components/error/errorMessage";
// import containerMovie from "./containerMovie";
import { Typography, Rating } from "@mui/material";


const Movie = () => {

    const dadoState = useSelector(state => state.dataReducer.data)
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")

    console.log(dadoState)

    const {
        Poster: imagem,
        Title: titulo,
        Year: ano,
        Plot: sinopse,
        Director: diretor,
        Actors: atores,
        Genre: genero,
        imdbRating: avaliacao
    } = dadoState;

    const avaliacaoFloat = parseFloat(avaliacao)
    const avaliacaoFinal = parseFloat((avaliacaoFloat / 2)).toFixed(1)

    return (
        <Styled.Section>

            <Styled.InfosFilme>
                <Styled.CategoryRating>
                    <Rating name="half-rating-read" defaultValue={avaliacaoFinal} precision={0.5} readOnly />
                    <Styled.GeneroFilme><strong>{genero}</strong></Styled.GeneroFilme>
                </Styled.CategoryRating>
                <div>
                    <Styled.TitleFilme>{titulo}</Styled.TitleFilme>
                    <Styled.SinopseFilme>{sinopse}</Styled.SinopseFilme>
                    <Styled.DiretorFilme><strong>Diretor: </strong>{diretor}</Styled.DiretorFilme>
                    <Styled.AtoresFilme><strong>Atores: </strong>{atores}</Styled.AtoresFilme>
                    <Styled.AnoFilme><strong>Ano: </strong>{ano}</Styled.AnoFilme>
                </div>

            </Styled.InfosFilme>

            <Styled.Poster src={imagem} />

        </Styled.Section>
    )

}

export default Movie