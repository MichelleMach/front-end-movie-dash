import React, { useContext, useState } from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import Lupa from "../assets/lupa.png"
import { useNavigate } from 'react-router-dom'
import * as Styled from "../styles/pages/home"
import GlobalContext from '../global/globalContext';

const Home = () => {

    const [resultadoBusca, setResultadoBusca] = useState("")
    const { states, setters } = useContext(GlobalContext)
    // const {currentUser} = useSelector(rootReducer => rootReducer.dataReducer) 
    const navigate = useNavigate()

    // const dispatch = useDispatch()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
    }

    const mostrarResultado = () => {

        if (!resultadoBusca) {
            console.log("Não há nada para buscar. Digite as palavras-chaves e tente novamente")
        }

        setters(resultadoBusca)
        console.log(states)

        // if (resultadoBusca = ) {
        //     console.log(resultadoBusca)

        // }

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

                    <Styled.Button onClick={() => mostrarResultado()}>Buscar</Styled.Button>
                </Styled.Buscar>
            </Styled.Container>
        </div>

    )
}
export default Home