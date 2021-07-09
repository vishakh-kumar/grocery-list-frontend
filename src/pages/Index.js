import React from "react";
import { Link } from "react-router-dom";

const Index = ({ groceries, deleteItem }) => {
    const loaded = () => {
        const handleDelete = (id) => {
            deleteItem(id);
        };

        return groceries.map((grocery) => (
            <div key={grocery._id} className="grocery">
                <div className={`grocery ${grocery.urgent ? "urgent" : ""}`}>
                    <h3 className="displayItem">
                        <Link to={`/grocery/${grocery._id}`}>
                            {grocery.item.toUpperCase()}
                        </Link>

                        <i
                            className="fas fa-trash-alt"
                            onClick={() => handleDelete(`/${grocery._id}`)}
                        ></i>
                    </h3>
                    <p>{grocery.date}</p>
                </div>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Loading List.....</h1>;
    };
    return <div>{groceries ? loaded() : loading()}</div>;
};

export default Index;
