import React from "react";

const person = (props) => {
    return (
        <p>
            I am a {props.name} and my age is {props.age}
        </p>
    );
};

export default person;
