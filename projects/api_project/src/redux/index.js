import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initState = {
    people: []
}


export const getPeople = () => {
    return dispatch => {
        axios.get("https://vschool-cors.herokuapp.com?url=http://ufc-data-api.ufc.com/api/v1/us/fighters")
        .then(response => {
            dispatch({
                type: "GET_PEOPLE",
                people: response.data
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type) {
        case "GET_PEOPLE":
            return {
                people: action.people
            }
        default: return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))