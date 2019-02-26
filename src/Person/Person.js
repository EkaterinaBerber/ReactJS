import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <React.Fragment>
            <div className="Person">
                <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
                {props.children ? <p>{props.children}</p> : null}
                <input type="text" onChange={props.change} value={props.name} />
            </div>
        </React.Fragment>
    );
};

export default person;