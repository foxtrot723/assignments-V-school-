import React from 'react'

const InfoCard = props => {

    return (
        <div className="info-card">
            <h1 className="title"> { props.firstName } { props.lastName } </h1>
            <h2 className="age"> { props.age } </h2>
            <h2 className="email"> { props.email } </h2>
            <h2 className="phone"> { props.phone } </h2>
            <p className="password"> { props.password } </p>
        </div>
    )
}

export default InfoCard