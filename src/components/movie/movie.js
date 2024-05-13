import React from "react";
import * as Styled from '../../styles/components/movie';
import store from "../../redux/store";

const Movie = () => {

    let dadosState = store.getState().dataReducer.data.filme
    // console.log(dadosState)

    let imagemFilme = dadosState.Poster
    let tituloFilme = dadosState.Title
    let anoFilme = dadosState.Year
    let diretorFilme = dadosState.Director
    let atoresFilme = dadosState.Actors
    let generoFilme = dadosState.Genre


    return (
        <Styled.Section>
            <Styled.Poster src={imagemFilme} />

            <Styled.InfosFilme>
                <div>
                <Styled.AnoFilme>{anoFilme}</Styled.AnoFilme>
                    <Styled.TitleFilme>{tituloFilme}</Styled.TitleFilme>
                    <Styled.DiretorFilme><strong>Diretor: </strong>{diretorFilme}</Styled.DiretorFilme>
                    <Styled.AtoresFilme><strong>Atores: </strong>{atoresFilme}</Styled.AtoresFilme>
                </div>
                <Styled.GeneroFilme>{generoFilme}</Styled.GeneroFilme>
            </Styled.InfosFilme>
        </Styled.Section>
    )

}

export default Movie