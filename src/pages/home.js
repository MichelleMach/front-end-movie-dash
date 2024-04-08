import React, { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Lupa from "../assets/lupa.png"
import { useNavigate } from 'react-router-dom'
import * as Styled from "../styles/pages/home"

const Home = () => {

    const [resultadoBusca, setResultadoBusca] = useState("")
    const {currentUser} = useSelector(rootReducer => rootReducer.dataReducer) 
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
    }

    const onClickBusca = (e) => {
        dispatch({
            type: 'todos/todoAdded',
            payload: resultadoBusca,
        })
    }
    

    const mostrarResultado = () => {
        
        // const dadosFilme = getByTitle(resultadoBusca)

        if (!resultadoBusca) {
            // console.log("Filme ou série não identificado")
        }
        // if (resultadoBusca == ) {
        //     console.log()
        // }

    }
    mostrarResultado()
    

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

                    <Styled.Button onClick={() => onClickBusca(navigate, resultadoBusca)}>Buscar</Styled.Button>
                </Styled.Buscar>
            </Styled.Container>
       
            
        </div>

    )
}
export default Home