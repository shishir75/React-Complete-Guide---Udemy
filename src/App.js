import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>I am react app</h1>
                <Person name="Shishir"></Person>
                <Person name="Masuma"></Person>
                <Person name="Mamun"></Person>
            </div>
        );
    }
}

export default App;
