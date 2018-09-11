import React from 'react'
// import Display from './Display'
import Suggestions from './Suggestions'
import { connect } from 'react-redux'
import { getPeople } from '../../redux'

class Form extends React.Component {
        constructor() {
                super()
                this.state = {
                        query: '', 
                        results: [],
                        status:true
                }
        }

        getInfo = () => {
                this.props.getPeople()
                this.setState({
                        results: this.props.people
                })
        }

        handleInputChange = (event) => {
                event.preventDefault()
                this.setState({
                        query: event.target.value
                }, () => {
                        if (this.state.query && this.state.query.length > 1) {
                                if (this.state.query.length % 2 === 0) {
                                        this.getInfo()
                                        this.putItems()
                                        console.log(this.results)
                                } else if (!this.state.query) {

                                }
                        } 
                })
        }

        putItems = () => {
                console.log(this.state.query.length)
                console.log(this.state.query)
                if (this.state.query.length > 1) {
                        this.setState({
                                status:false
                        })
                } else if (this.state.query.length === 1) {
                        this.setState({
                                status:true
                        })
                }
        }

        handleSubmit = () => {
                if (this.state.query === this.state.results[0]) {
                        console.log("hello")
                }
        }
        
        render() {
                return (
                <div>
                        <form className = "my-form" onSubmit = { this.handleSubmit }>
                        <div className = "input-container">
                                <input className = "my-input" type = "text" ref = {input => this.search = input} onChange = {this.handleInputChange} />
                                <input className = "my-button" type = "button" value = "Submit" />
                        </div>
                        {/* <p className = "my-display-query">{this.state.query}</p> */}
                        <Suggestions query = { this.state.query } results = { this.props.people } status = { this.state.status } />
                        </form>             
                </div>
                )
        }
}

// onSubmit = { this.handleSubmit }

export default connect(state => state, { getPeople })(Form)