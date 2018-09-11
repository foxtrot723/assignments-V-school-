import React from 'react'
import Cards from './Cards'
import { connect } from 'react-redux'
import { getPeople } from '../../redux'
import './about.css'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            // currentlyDisplayed: this.props.people
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidMount() {
        this.props.getPeople()
    }

    onInputChange(event) {
        event.preventDefault()
        this.setState({
            search: event.target.value
        })
    }

    render() {
        const { search } = this.state

        
        let filteredFighters = this.props.people.sort().filter( fighter => {
            return fighter.first_name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })

        return (
            <div className = "about-container">
                <div className = "inputs-container">
                    <input className = "about-page-input" onChange = { this.onInputChange } value = { this.state.search } name = { this.state.search } />
                </div>
                <div className = "about-wrap">
                    { filteredFighters.map(fighter => {
                        return <Cards key = { fighter.id }
                                      image = { fighter.thumbnail }
                                      first_name = { fighter.first_name }
                                      last_name = { fighter.last_name } 
                                      wins = { fighter.wins }
                                      losses = { fighter.losses }
                                      draws = { fighter.draws }
                                      weight_class = { fighter.weight_class } />
                    }) }
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getPeople })(About)