// INTRO TO REDUX

//INSTALL JSON FILE //  NPM INIT -Y 

//INSTALL REDUX //  NPM INSTALL --SAVE REDUX

// CREATE AN APP.JS FILE FIRST

// REQUIRE REDUX

const redux = require("redux")

// INITIAL STATE //

const state = {
    count: 0
}


// ACTIONS (ALSO KNOWN AS ACTION CREATORS)
// ALL ACTIONS ARE FUNCTIONS THAT RETURN OBJECTS
// MUST RETURN TYPE 
// TYPE MUST BE IN SCREAMING STATE CASE

function addFive() {
    return {
        type: "ADD_FIVE"
    }
}

function addRand( num ) {
    return {
        type: "RETURN_RAND",
        num: num
    }
}

function minusTwo() {
    return {
        type: "MINUS_TWO"
    }
}






// REDUCER (FUNCTION THAT TAKES ACTION OBJECTS AND UPDATES THE STATE / OR STORE / APPROPRIATELY)
// TAKES 2 ARGUMENTS
// FIRST ARGUMENT IS THE STATE
// ACTION REFERS TO THE OBJECT IN THE FUNCTION

// function reducer(prevState = state, action) {
//     switch(action.type) {
//         case "ADD_NUM":
//             return {
//                 count: prevState.count + action.newNum
//             }
//         case "DIVIDE_BY_TWO":
//             return {
//                 count: prevState.count / 2
//             }
//         case "MULTIPLY_BY_NUM":
//             return {
//                 count: prevState.count * action.randNum
//             }
//         default:
//             return prevState
//     }
// }

function reducer(prevState = state, action) {
    switch(action.type) {
        case "ADD_FIVE":
            return {
                count: prevState.count + 5
            }
        case "RETURN_RAND":
            return {
                count: prevState.count + action.num
            }
        case "MINUS_TWO":
            return {
                count: prevState.count - 2
            }
        default: return prevState
    }
}




// STORE IS ALSO THE STATE IN REDUX TERMINOLOGY

var store = redux.createStore(reducer)


// ALLOWS YOU TO SEE THE RETURN VALUE OF THE OBJECT IN THE CONSOLE

store.subscribe(function() {
    console.log(store.getState())
})

// ALWAYS DISPATCH AT THE BOTTOM

store.dispatch(addFive())
store.dispatch(addRand(10))
store.dispatch(minusTwo())