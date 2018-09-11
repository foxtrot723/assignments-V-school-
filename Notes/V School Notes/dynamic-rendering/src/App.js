import React from 'react'
import Greeting from './Greeting'
import Follow from './Follow'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            status: true
        }
    }

    handleClick = e => {
        this.setState(prevState => {
            return {
                status: !prevState.status
            }
        })
    }

    render(){
        return (
            <div>
                <Greeting phrase="hello"/>
                <Follow status={this.state.status} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default App