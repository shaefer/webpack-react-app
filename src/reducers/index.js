/**
 * Actions = {type:"SOME_REDUCER_NAME", payload: {someObject:"hello"}}
 */
const rootReducer = (state = { someData: "data is here"}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;