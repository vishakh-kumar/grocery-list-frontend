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
                    <Link to={`/grocery/${grocery._id}`}>
                        <h3>
                            {grocery.item.toUpperCase()}
                            <p>
                                <i
                                    className="fas fa-trash-alt"
                                    style={{ color: "red" }}
                                    onClick={() =>
                                        handleDelete(`/${grocery._id}`)
                                    }
                                ></i>
                            </p>
                        </h3>
                    </Link>
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
