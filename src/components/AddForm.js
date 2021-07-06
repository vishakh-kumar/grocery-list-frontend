import React from "react";
import { useState } from "react";

const AddForm = ({ grocery, addItem }) => {
    const [newForm, setNewForm] = useState({
        item: "",
        date: "",
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
        addItem(newForm);
        setNewForm({
            item: "",
            date: "",
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
                    type="date"
                    name="date"
                    value={newForm.date}
                    onChange={handleChange}
                />
                <div className="form-control form-control-check"></div>
                <label>Is It Urgent?</label>
                <input
                    type="checkbox"
                    name="urgent"
                    value={newForm.urgent}
                    onChange={handleChecked}
                />
            </div>
            <button type="submit" className="btn btn-block">
                Add Item
            </button>
        </form>
    );
};

export default AddForm;
