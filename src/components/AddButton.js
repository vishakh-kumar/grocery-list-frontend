import React from "react";

const AddButton = ({ color, text, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                style={{ backgroundColor: color }}
                className="btn"
            >
                {text}
            </button>
        </div>
    );
};

export default AddButton;
