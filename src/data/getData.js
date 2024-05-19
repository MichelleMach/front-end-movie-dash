import { BASE_URL } from "../constantes/url";

export const getById = async (id) => {
    
    const response = await fetch(`${BASE_URL}i=${id}`)
    const data = await response.json();
    return data;
}

export const getByTitle = async (title) => {
    const response = await fetch(`${BASE_URL}&t=${title}`)
    const data = await response.json();
    return data;
}

