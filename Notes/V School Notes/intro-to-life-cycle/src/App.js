import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()

        this.state = {
            backgroundColor: 'cyan',
            top: 0,
            left: 0,
        }
    }
    componentDidMount() {
        window.addEventListener("keydown", e=> {
            console.log(e.code)

            switch(e.code){
                case "KeyB": 
                        this.setState({backgroundColor: 'blue'})
                        break;
                case "KeyR":
                        this.setState({backgroundColor: 'red'})
                        break;
                case "KeyG":
                        this.setState({backgroundColor: 'green'})
                        break;
                case "ArrowUp":
                        this.setState(prevState => ({
                            top: prevState.top -= 20
                        }))
                        break;
                case "ArrowDown":
                        this.setState(prevState => ({
                            top: prevState.top += 20
                        }))
                        break;
                case "ArrowLeft":
                        this.setState(prevState => ({
                            left: prevState.left -= 20
                        }))
                        break;
                case "ArrowRight":
                        this.setState(prevState => ({
                            left: prevState.left += 20
                        }))
                        console.log(this.state)
                        break;
                default: console.log(e.code)
                        console.log(this.state)
            }
        })
    }
   
    render() {
        const styles = {
            container: {
                backgroundColor: this.state.backgroundColor,
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: this.state.top,
                left: this.state.left,
                transition: 'all.5s'
            }
        }
        return (
            <div style={ styles.container }> 
                Hello Werld
            </div>
        );
    }
}

export default App;