import React from 'react';

const Person = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h5>{props.birth_year}</h5>
            <h5>{props.gender}</h5>
        </div>
    );
}

export default Person;