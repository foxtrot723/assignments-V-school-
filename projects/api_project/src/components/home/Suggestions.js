import React from 'react'
import { connect } from 'react-redux'
// import './home.css'

class Suggestions extends React.Component {

  render () {
    let options = this.props.results
    .filter(fighter => {
        return fighter.first_name.toLowerCase().indexOf(this.props.query) !== -1
    })
    .map(r => (
        <li key={r.id} className = "list-items">
            <p>{r.first_name} {" "} {r.last_name}</p>
        </li>
    ))
    return (
        <div>
            {
                this.props.query === 0 ?
                <div></div>
                :
                <div className = "options-container">
                    <ul>
                        {options}
                    </ul>
                </div>
            }
        </div>
    )
  }
}

export default connect(state => state, {  })(Suggestions)