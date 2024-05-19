import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Lupa from "../assets/lupa.png"
import * as Styled from "../styles/pages/home"
import { useNavigate } from 'react-router-dom'
import { goToMoviePage } from '../router/coordenator'
import { getByTitle, getById } from '../data/getData'


const Home = () => {

    const [resultadoBusca, setResultadoBusca] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
    }

    const onClickBusca = async (e) => {

        dispatch({ type: 'FETCH_DATA_REQUEST' });

        try {
            let data;
            if (resultadoBusca.substr(0, 2) === "tt") {
                data = await getById(resultadoBusca);
            } else {
                data = await getByTitle(resultadoBusca);
            }

            dispatch({
              type: 'FETCH_DATA_SUCCESS',
              payload: data,
            });

            goToMoviePage(navigate, data.imdbID);
          } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
          }
        };


    return (
        <div>
            <Styled.Container>
                <Styled.Title>Sabe o que quer assistir?</Styled.Title>
                <Styled.Subtitle>Procure por titulo, gênero ou ator participante.</Styled.Subtitle>

                <Styled.Buscar>
                    <Styled.ContainerInput
                        value={resultadoBusca}
                        onChange={onChangeBusca}
                        name={"busca"}
                    >
                        <Styled.Lupa src={Lupa} alt={'search'} />
                        <Styled.Input placeholder="Pesquise aqui" />
                    </Styled.ContainerInput>

                    <Styled.Button onClick={onClickBusca}>Buscar</Styled.Button>
                </Styled.Buscar>
            </Styled.Container>
        </div>

    )
}
export default Home