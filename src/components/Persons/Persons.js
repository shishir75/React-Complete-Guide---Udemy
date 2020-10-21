import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] inside Constructor", props);
    }

    UNSAFE_componentWillMount() {
        console.log("[Persons.js] inside ComponentWillMount ");
    }

    componentDidMount() {
        console.log("[Persons.js] inside ComponentDidMount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(
            "[UPDATE Persons.js] inside componentWillReceiveProps",
            nextProps
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(
            "[UPDATE Persons.js] inside shouldComponentUpdate",
            nextProps,
            nextState
        );
        return nextProps.persons !== this.props.persons;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log(
            "[UPDATE Persons.js] inside UNSAFE_componentWillUpdate",
            nextProps,
            nextState
        );
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] inside componentDidUpdate");
    }

    render() {
        console.log("[Persons.js] inside render()");
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                >
                    My Hobby is Sleeping
                </Person>
            );
        });
    }
}

export default Persons;
