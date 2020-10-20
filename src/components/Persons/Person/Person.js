import React, { Component } from "react";
import Radium from "radium";
import "./Person.css";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js] inside Constructor", props);
    }

    UNSAFE_componentWillMount() {
        console.log("[Person.js] inside ComponentWillMount ");
    }

    componentDidMount() {
        console.log("[Person.js] inside ComponentDidMount");
    }

    render() {
        console.log("[Person.js] inside render()");

        const style = {
            "@media(min-width: 500px)": {
                width: "450px",
                color: "red",
            },
        };
        return (
            <div className="Person" style={style}>
                <p onClick={this.props.click}>
                    My name is {this.props.name} and I am {this.props.age} years
                    old
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                ></input>
            </div>
        );
    }
}

export default Radium(Person);
