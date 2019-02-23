import React from 'react';

const person = (props) => {
    return (
        <React.Fragment>
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            {props.children ? <p>{props.children}</p> : null}
        </React.Fragment>
    );
};

export default person;