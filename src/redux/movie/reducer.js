import { BASE_URL } from "../../constantes/url";
import axios from "axios";

const initialState = {
    initialState: null,
}

const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BUSCAR_ID':
            axios.get(`${BASE_URL}i=${action.payload}`)
                .then((res) => {
                    state.data = {filme: res.data};
                })
                .catch((err) => {
                    console.error(err);
                    return state;
                });


        case 'BUSCAR_TITLE':
            axios.get(`${BASE_URL}t=${action.payload}`)
                .then((res) => {
                    state.data = { filme: res.data, ... state };
                })
                .catch((err) => {
                    console.error(err);
                    return state;
                });

        default:
            return state;
    }
};

export default dataReducer;
