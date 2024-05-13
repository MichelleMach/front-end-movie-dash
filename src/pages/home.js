import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Lupa from "../assets/lupa.png"
import * as Styled from "../styles/pages/home"
import  Movie from '../components/movie/movie'


const Home = () => {

    const [resultadoBusca, setResultadoBusca] = useState("")
    const dispatch = useDispatch()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
    }

    const onClickBusca = (e) => {

        if (resultadoBusca.substr(0, 2) === "tt" ){
            dispatch({
                type: 'BUSCAR_ID',
                payload: resultadoBusca,
            })
        }

        if (resultadoBusca) {
            dispatch({
                type: 'BUSCAR_TITLE',
                payload: resultadoBusca,
            })
        }
        
    }

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

                <Movie/>
            </Styled.Container>
        </div>

    )
}
export default Home