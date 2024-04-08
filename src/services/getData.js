import { BASE_URL } from "../constantes/url";
import axios from "axios";

export const getById = (id) => {
    axios.get(`${BASE_URL}i=${id}`)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
}

export const getByTitle = (title) => {
    axios.get(`${BASE_URL}t=${title}`)
        .then((res) => {
            let dadoFilme = res.data
            return dadoFilme
        }).catch((err) => {
            console.log(err.response)
        })
}

export const getByType = (type) => {
    axios.get(`${BASE_URL}type=${type}`)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
}

