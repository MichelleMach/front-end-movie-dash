import styled, { keyframes, gradient } from 'styled-components'

const AnimacaoDegrade = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`


export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
    animation: gradient 15s ease infinite;
	height: 100vh;

    animation: ${AnimacaoDegrade} 15s ease infinite;;
`

export const TextDiv = styled.div`
    text-align: center;
    line-height: 3rem;
`

export const Title = styled.h1`
    color: white;
    font-size: 4rem;
`

export const Subtitle = styled.p `
    color: white;
    font-size: 1.2rem;
`

export const Buscar = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: raw;
    width: 60%;
    padding: 30px;
`;

export const ContainerInput = styled.div `
    display:flex;
    width: 35rem;
    height: 3rem;
    padding-left: 10px;
    align-items:center;
    border: 1px solid transparent;
    background-color: white;
    border-radius: 30px;
    margin: 0px 10px;
`;

export const Lupa = styled.img `
    width: 20px;
    margin: 0 15px 0 15px;
`;

export const Input = styled.input`
    width: 100%;
    height: 26px;
    padding: 16px 8px 16px 17px;
    border:none;
    outline:none;
    background-color: transparent;
    font-size:14px;

    &:hover{
        cursor: text
    }
`;

export const Button = styled.button `
    width: 80px;
    height: 40px;
    outline:none;
    background: white;
    border: 1px solid transparent;
    border-radius: 30px;
    color: #04868B;

    &:hover{
        cursor: pointer;
        color:white;
        border: 1px solid white;
        background-color: transparent;
    }
`