import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

const Header = (props) => {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
            }}
        >
            {" "}
            <div>
                <Link to="/">
                    <h3 className="headingIcon">
                        <p>List</p>
                        <i className="fas fa-list-alt"></i>
                    </h3>
                </Link>
            </div>
            <div
                style={{
                    display: "flex",
                    cursor: "pointer",
                    border: 0,
                    margin: 0,
                }}
            >
                {props.user ? (
                    <div>
                        <h3 className="headingIcon" onClick={logout}>
                            <p>
                                {props.user.displayName
                                    .split(" ")
                                    .slice(0, -1)
                                    .join(" ")}
                            </p>{" "}
                            <i className="fas fa-sign-out-alt"></i>
                        </h3>
                    </div>
                ) : (
                    <div>
                        <h3 className="headingIcon" onClick={login}>
                            <p>Login</p> <i className="fas fa-sign-in-alt"></i>
                        </h3>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
