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
    };

    switchNameHandler = () => {
        console.log("was clicked");
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I am react app</h1>
                <p>Its really awesome...</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                ></Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                >
                    My Hobby is Sleeping
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                ></Person>
            </div>
        );
    }
}

export default App;
