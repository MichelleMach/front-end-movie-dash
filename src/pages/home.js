import React, { useContext, useState } from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import Lupa from "../assets/lupa.png"
import * as Styled from "../styles/pages/home"
import { type } from '@testing-library/user-event/dist/type';

const Home = () => {

    const [resultadoBusca, setResultadoBusca] = useState("")
    const dispatch = useDispatch()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
    }

    const onClickBusca = (e) => {
        dispatch({
            type: 'REALIZAR_BUSCA',
            payload: resultadoBusca,
        })
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
            </Styled.Container>
        </div>

    )
}
export default Home