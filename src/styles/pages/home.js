import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
`
export const Title = styled.h1`
    color: #04868B;
    font-size: 4rem;
`

export const Subtitle = styled.p `
    color: #7E7D78;
    font-size: 1.5rem;
`

export const Buscar = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    flex-direction: raw;
    width: 60%;
    padding: 30px;
`;

export const ContainerInput = styled.div `
    display:flex;
    width: 70%;
    padding-left: 10px;
    align-items:center;
    border: 1px solid #b8b8b8;
    border-radius: 30px;
    
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
    border: 1px solid #b8b8b8;
    border-radius: 30px;

    &:hover{
        cursor: pointer;
        background-color: #04868B;
        color: white;
        border: white;
    }
`