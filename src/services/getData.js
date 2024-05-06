import { BASE_URL } from "../constantes/url";
import axios from "axios";

export const getById = (resultadoBusca, setResultadoBuscaa) => {
    axios.get(`${BASE_URL}i=${id}`)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
}

export const getByTitle = (resultadoBusca, setResultadoBusca) => {
    axios.get(`${BASE_URL}&t=${resultadoBusca}`)
        .then((res) => {
            console.log(resultadoBusca)
            let teste = setResultadoBusca(res.data)
            console.log(teste)
        }).catch((err) => {
            console.log(err.response)
        })
}

export const getByType = (resultadoBusca, setResultadoBusca) => {
    axios.get(`${BASE_URL}type=${resultadoBusca}`)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
}

