import React from "react";
import AddButton from "./AddButton";

const GroceryHeading = ({ title, onAdd, showAddForm }) => {
    return (
        <header className="header">
            <h1>Grocery List</h1>
            <AddButton
                color={showAddForm ? "red" : "green"}
                text={showAddForm ? "Close" : "Add"}
                onClick={onAdd}
            />
        </header>
    );
};

export default GroceryHeading;
