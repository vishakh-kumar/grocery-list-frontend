import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AddForm from "./AddForm";
import GroceryHeading from "./GroceryHeading";
import Index from "../pages/Index";

const Main = (props) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [groceries, setGroceries] = useState(null);
    //Backend URL
    const URL = "https://backend-grocerylist.herokuapp.com/grocery";
    //Fetch data from Backend
    const getGrocery = async () => {
        const response = await fetch(URL);
        //convert JSON to Usable JS
        const data = await response.json();
        setGroceries(data);
    };
    //=========================
    //       Add Items
    //=========================
    const addItem = async (item) => {
        //make POST request to add item
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            //Convert JS to JSON
            body: JSON.stringify(item),
        });
        getGrocery();
    };
    //=========================
    //      Delete Items
    //=========================
    const deleteItem = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getGrocery();
    };

    return (
        <main>
            <Route path="/grocery">
                <GroceryHeading
                    onAdd={() => setShowAddForm(!showAddForm)}
                    showAddForm={showAddForm}
                />
                {showAddForm && (
                    <AddForm groceries={groceries} addItem={addItem} />
                )}
                <Index groceries={groceries} deleteItem={deleteItem} />
            </Route>
        </main>
    );
};

export default Main;
