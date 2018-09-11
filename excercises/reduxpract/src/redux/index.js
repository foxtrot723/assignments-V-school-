import { createStore } from 'redux'

const initState = {
    count: 0
}

export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

export const subOne = () => {
    return {
        type: "SUB_ONE"
    }
}

export const multNum = num => {
    return {
        type: "MULT_NUM"
    }
}

export const divNum = num => {
    return {
        type: "DIV_NUM"
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type) {
        case "ADD_ONE": 
            return {
                count: prevState.count + 1
            }
        case "SUB_ONE":
            return {
                count: prevState.count - 1
            }
        case "MULT_NUM":
            return {
                count: prevState.count * 2
            }
        case "DIV_NUM":
            return {
                count: prevState.count / 3
            }
        default: return prevState
    }
}
        
        export default createStore(reducer)

