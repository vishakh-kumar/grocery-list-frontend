import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import AddForm from "./AddForm";

const Main = (props) => {
    const [grocery, setGrocery] = useState(null);
    //Backend URL
    const URL = "https://backend-grocerylist.herokuapp.com/grocery";
    //Fetch data from Backend
    const getGrocery = async () => {
        const response = await fetch(URL);
        //convert JSON to Usable JS
        const data = await response.json();
        setGrocery(data);
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

    useEffect(() => getGrocery(), []);
    return (
        <main>
            <Route path="/grocery">
                <AddForm grocery={grocery} addItem={addItem} />
            </Route>
        </main>
    );
};

export default Main;
