import React, { Component }from 'react'
import axios from 'axios'
import Person from './Person'

class App extends Component {
    constructor(){
        super()

        this.state = {
            data: []
        }
    }


    componentDidMount() {
        axios.get('https://swapi.co/api/people').then(res => {
            this.setState({data: res.data.results})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const displayChars = this.state.data.map(char => {
            return (
                <Person key={char.url}
                        {...char}/>
            )
        })

        return (
            <div>
                {displayChars}
            </div>
        )
    }
}

export default App