import React from "react";

const Cockpit = (props) => {
    let classes = [];
    if (props.persons.length <= 2) {
        classes.push("red"); // classes = ['red'];
    }
    if (props.persons.length <= 1) {
        classes.push("bold"); // classes = ['red', 'bold'];
    }

    const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
        borderRadius: "5px",
        ":hover": {
            backgroundColor: "lightgreen",
            color: "black",
        },
    };

    if (props.showPersons) {
        style.backgroundColor = "red"; // change background color after clicking
        style[":hover"] = {
            backgroundColor: "salmon",
            color: "black",
        };
    }

    return (
        <div>
            <h1>Hi, I am react app</h1>
            <p className={classes.join(" ")}>Its really awesome...</p>
            <button style={style} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit;
