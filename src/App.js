import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Shishir", age: 24 },
            { name: "Masuma", age: 18 },
            { name: "Mamun", age: 26 },
        ],
        otherState: "some other value",
        showPersons: false,
    };

    switchNameHandler = (newName) => {
        // console.log("was clicked");
        // this.state.persons[0].name = "Obydullah Sarder";  // DON"T DO THIS
        this.setState({
            persons: [
                { name: newName, age: 26 },
                { name: "Masuma", age: 18 },
                { name: "Mamun", age: 27 },
            ],
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Shishir", age: 24 },
                { name: event.target.value, age: 18 },
                { name: "Mamun", age: 26 },
            ],
        });
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        const style = {
            backgroundColor: "#eeeeee",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            borderRadius: "5px",
        };

        return (
            <div className="App">
                <h1>Hi, I am react app</h1>
                <p>Its really awesome...</p>
                <button style={style} onClick={this.togglePersonHandler}>
                    Switch Name
                </button>
                {this.state.showPersons ? (
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        ></Person>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(
                                this,
                                "Obydullah"
                            )}
                            changed={this.nameChangedHandler}
                        >
                            My Hobby is Sleeping
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        ></Person>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
