import React from 'react'

class Stats extends React.Component {


    render() {

        return (
            <div>
                {
                    this.props.isToggleOn ?
                    <div></div>
                    :
                    <div className = "stats-cover">
                        <div className = "stats-background"></div>
                        <div className = "stats-container">
                            <div>
                                <div>
                                    <img src = { this.props.image } alt = "" />
                                </div>
                            </div>
                            <div>
                                <div className = "fighter-name">{ this.props.first_name } { this.props.last_name }</div>
                                <div className = "fighter-weightclass">{ this.props.weight_class }</div>
                                <div className = "fighter-stats">
                                    <div className = "player-wins">Wins: { this.props.wins }</div>
                                    <div className = "player-losses">Losses: { this.props.losses }</div>
                                    <div className = "player-ties">Ties: { this.props.draws }</div>
                                </div>
                            </div>
                            <input className = "close-button" type = "button" value = "close" onClick = { this.props.importNames } />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Stats