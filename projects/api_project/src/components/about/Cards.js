import React from 'react'
import './about.css'
import { connect } from 'react-redux'
import Stats from './Stats'

class Cards extends React.Component {
    constructor() {
        super()
        this.state = {
            isToggleOn:true
        }
    }

    importNames = () => {
        this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <Stats key = { this.props.key } 
                       image = { this.props.image }                           
                       wins = { this.props.wins } 
                       losses = { this.props.losses }
                       draws = { this.props.draws }
                       weight_class = { this.props.weight_class }
                       first_name = { this.props.first_name }
                       last_name = { this.props.last_name }
                       isToggleOn = { this.state.isToggleOn }
                       importNames = { this.importNames }
                        />
                <div className = "card-container">
                    <div className = "hexagon double">
                    <img className = "player-picture" src = {this.props.image} alt = "" />
                    </div>

                    <h2 className = "fighter-names"> { this.props.first_name} { this.props.last_name } </h2>
                    <input className = "player-button" 
                           type="button" 
                           value="Add Fighter" 
                           key = { this.props.key } 
                           onClick = { this.importNames } />
                </div>
            </div>
        )
    }
}

export default connect(state => state, {})(Cards)