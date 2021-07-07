import React from "react";
import { Link } from "react-router-dom";

const Index = ({ groceries, deleteItem }) => {
    const loaded = () => {
        const handleDelete = (id) => {
            deleteItem(id);
        };
        return groceries.map((grocery) => (
            <div key={grocery._id} className="grocery">
                <Link to={`/grocery/${grocery._id}`}>
                    <h3>{grocery.item.toUpperCase()}</h3>
                    <p>
                        <i
                            className="fas fa-trash-alt"
                            style={{ color: "red" }}
                            onClick={() => handleDelete(`/${grocery._id}`)}
                        ></i>
                    </p>
                </Link>
                <h4>{grocery.date}</h4>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Loading List.....</h1>;
    };
    return <div>{groceries ? loaded() : loading()}</div>;
};

export default Index;
