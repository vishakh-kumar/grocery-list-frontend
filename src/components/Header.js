import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
            }}
        >
            <Link to="/grocery">
                <h3>Home</h3>
            </Link>
            <Link to="#">
                <h3>Users</h3>
            </Link>
        </nav>
    );
};

export default Header;
