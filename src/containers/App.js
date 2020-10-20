import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] inside Constructor", props);
    }

    UNSAFE_componentWillMount() {
        console.log("[App.js] inside ComponentWillMount ");
    }

    componentDidMount() {
        console.log("[App.js] inside ComponentDidMount");
    }

    state = {
        persons: [
            { id: 1, name: "Shishir", age: 24 },
            { id: 2, name: "Masuma", age: 18 },
            { id: 3, name: "Mamun", age: 26 },
        ],
        otherState: "some other value",
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] }; // make a copy

        // const person = Object.assign({}, this.state.persons[personIndex]); // equivalent to the previous one

        person.name = event.target.value;

        const persons = [...this.state.persons]; // make a copy

        // const persons = this.state.persons.slice(); // equivalent to the previous one

        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); // make a copy from original state
        const persons = [...this.state.persons]; // equivalent to the previous one but its modern, (spread operator)
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    render() {
        console.log("[App.js] inside render()");
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                ></Persons>
            );
        }

        return (
            <StyleRoot>
                <div className="App">
                    <Cockpit
                        persons={this.state.persons}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonHandler}
                        appTitle={this.props.title}
                    ></Cockpit>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
