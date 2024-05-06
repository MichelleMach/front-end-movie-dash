import { BASE_URL } from "../../constantes/url";
import axios from "axios";

const initialState = {
    data: null,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REALIZAR_BUSCA':
            if (action.payload.substr(0, 2) === "tt") {
                axios.get(`${BASE_URL}i=${action.payload}`)
                    .then((res) => {
                        console.log(res.data)
                        return { ...state, data: res.data };
                    })
                    .catch((err) => {
                        console.error(err);
                        return state; 
                    });
            } else {
                axios.get(`${BASE_URL}t=${action.payload}`)
                    .then((res) => {
                        console.log(res.data)
                        return { ...state, data: res.data };
                    })
                    .catch((err) => {
                        console.error(err);
                        return state; 
                    });
            }
        default:
            return state;
    }
};

export default dataReducer;
