import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Lupa from "../assets/lupa.png"
import * as Styled from "../styles/pages/home"
import { getByTitle, getById } from '../data/getData'
import LoadingPage from '../components/loading/loadingPage'

const Home = () => {

    const [resultadoBusca, setResultadoBusca] = useState("")
    const [goLoading, setGoLoading] = useState(false)

    const dispatch = useDispatch()


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

        } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
        }

        setGoLoading(true)
    };

    return (
        <div>
            {goLoading && <LoadingPage />}
            <Styled.Container>
                <Styled.TextDiv>
                    <Styled.Title>Sabe o que quer assistir?</Styled.Title>
                    <Styled.Subtitle>Procure pelo titulo ou id do filme.</Styled.Subtitle>
                </Styled.TextDiv>
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