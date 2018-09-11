import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            myName: "rtyr",
            myAge: "",
            eyeColor: "",
            skinTone: "",
            names: []
        }
    }

    handleChange = event => {
        this.setState(prevState => {
            return {
                [event.myName]: event.prevState.myName
            }
        })
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     this.state.names.push(this.state.myName)
    // }

    render() {
        return (
            <form>
                <input type="text" name="myName" value={this.state.myName} onChange={this.handleChange} />
                <input type="text" name="myAge" value={this.state.myAge}  />
                <input type="text" name="eyeColor" value={this.state.eyeColor}  />
                <input type="text" name="skinTone" value={this.state.skinTone}  />
                <button onClick={this.handleSubmit}>Submit</button>
                <h1>{this.state.myName}</h1>
                <h1>{this.state.myAge}</h1>
                <h1>{this.state.eyeColor}</h1>
                <h1>{this.state.skinTone}</h1>
                {/* {displayNames}
                const displayNames = names.map((name, i) => {
      <List key= {name.myName}
            name = {name.myAge}
            eyeColor = {name.eyeColor}
            skinTone = {name.skinTone} />
  }) */}
            </form>
        )
    }
}

export default Form