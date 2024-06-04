import React, { useEffect, useState } from "react"
import LoadingGif from './loading'
import { useNavigate } from 'react-router-dom'
import * as Styled from '../../styles/components/loadingPage'
import { goToMoviePage } from "../../router/coordenator"
import { useSelector } from "react-redux"

const LoadingPage = () => {

    const navigate = useNavigate()
    const dataState = useSelector(state => state.dataReducer.data)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        let timer;
        if (dataState && dataState.imdbID) {
            timer = setTimeout(() => {
                setShowLoading(false);
                goToMoviePage(navigate, dataState.imdbID);
            }, 4000);
        }

        // Limpe o timer caso o componente seja desmontado antes do tempo
        return () => clearTimeout(timer);
    }, [dataState, navigate]);

    if (showLoading) {
        return (
            <Styled.Section>
                <LoadingGif />
            </Styled.Section>
        );
    }

    return null; // Ou algum conteúdo alternativo se necessário
}
export default LoadingPage