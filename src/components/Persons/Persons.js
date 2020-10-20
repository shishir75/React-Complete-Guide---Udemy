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
