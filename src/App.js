import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { id: 1, name: "Shishir", age: 24 },
            { id: 2, name: "Masuma", age: 18 },
            { id: 3, name: "Mamun", age: 26 },
        ],
        otherState: "some other value",
        showPersons: false,
    };

    // switchNameHandler = (newName) => {
    //     // console.log("was clicked");
    //     // this.state.persons[0].name = "Obydullah Sarder";  // DON"T DO THIS
    //     this.setState({
    //         persons: [
    //             { id: 1, name: newName, age: 26 },
    //             { id: 2, name: "Masuma", age: 18 },
    //             { id: 3, name: "Mamun", age: 27 },
    //         ],
    //     });
    // };

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
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            borderRadius: "5px",
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) =>
                                    this.nameChangedHandler(event, person.id)
                                }
                            >
                                My Hobby is Sleeping
                            </Person>
                        );
                    })}
                    {/* <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    ></Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, "Obydullah")}
                        changed={this.nameChangedHandler}
                    >
                        My Hobby is Sleeping
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    ></Person> */}
                </div>
            );

            style.backgroundColor = "red"; // change background color after clicking
        }

        return (
            <div className="App">
                <h1>Hi, I am react app</h1>
                <p>Its really awesome...</p>
                <button style={style} onClick={this.togglePersonHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
