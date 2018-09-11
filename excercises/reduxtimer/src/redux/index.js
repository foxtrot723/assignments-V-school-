import { createStore } from 'redux'

const initState = {
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0
}


export const setTimer = () => {
    return {
        type: "SET_TIMER"
    }
}


const reducer = (prevState = initState, action) => {
    switch(action.type) {
        case "SET_TIMER":
                if (prevState.minutes >= 59) {
                    return {
                        milliseconds: prevState.milliseconds = 0,
                        seconds: prevState.seconds = 0,
                        minutes: prevState.minutes = 0,
                        hours: prevState.hours + 1
                    }
                } else if (prevState.seconds >= 59) {
                    return {
                        milliseconds: prevState.milliseconds = 0,
                        seconds: prevState.seconds = 0,
                        minutes: prevState.minutes + 1,
                        hours: prevState.hours
                    }
                } else if (prevState.milliseconds >= 9) {
                    return {
                        milliseconds: prevState.milliseconds = 0,
                        seconds: prevState.seconds + 1,
                        minutes: prevState.minutes,
                        hours: prevState.hours
                    }
                } else {
                    return {
                        milliseconds: prevState.milliseconds + 1,
                        seconds: prevState.seconds ,
                        minutes: prevState.minutes ,
                        hours: prevState.hours

                    }
                }
        default: return (prevState)
    }
}

export default createStore(reducer)

