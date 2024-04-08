const initialState = {
    currenteUser: null,
}

const dataReducer = (state = initialState, action) => {
    if (action.type === 'todos/todoAdded' ) {
        return {...state, currenteUser: 10}
    }

    return state;
};

export default dataReducer;