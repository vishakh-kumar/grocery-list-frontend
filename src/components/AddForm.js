import React from "react";
import { useState } from "react";

const AddForm = ({ groceries, addItem }) => {
    let currentDate = Date().slice(0, 11);
    const [newForm, setNewForm] = useState({
        item: "",
        date: currentDate,
        urgent: false,
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };
    const handleChecked = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.checked });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!newForm.item) {
            alert("Please Add An Item");
            return;
        }
        addItem(newForm);
        setNewForm({
            item: "",
            date: currentDate,
            urgent: false,
        });
    };
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Item</label>
                <input
                    type="text"
                    placeholder="Add Item"
                    name="item"
                    value={newForm.item}
                    onChange={handleChange}
                />
                <label>Date</label>
                <input
                    type="text"
                    name="date"
                    value={newForm.date}
                    onChange={handleChange}
                />
                <div className="form-control form-control-check">
                    <label>Is It Urgent?</label>
                    <input
                        type="checkbox"
                        name="urgent"
                        checked={newForm.urgent}
                        onChange={handleChecked}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-block">
                Add Item
            </button>
        </form>
    );
};

export default AddForm;
