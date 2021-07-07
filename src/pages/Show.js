import React from "react";

const Show = ({ match, groceries }) => {
    const id = match.params.id;
    const grocery = groceries.find((p) => p._id === id);

    return (
        <div>
            <h1>{grocery.item.toUpperCase()}</h1>
            <h3>Check Availability At</h3>
            <div className="storeLogos">
                <a
                    target="_blank"
                    href={`https://www.walmart.com/search/?query=${grocery.item}`}
                >
                    <img
                        src="https://www.freepnglogos.com/uploads/walmart-logo-26.png"
                        alt="Walmart Logo"
                    />
                </a>
                <a
                    className="middleImage"
                    target="_blank"
                    href={`https://www.target.com/s?searchTerm=${grocery.item}`}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Target_Corporation_logo_%28vector%29.svg"
                        alt="Target Logo"
                    />
                </a>
                <a
                    target="_blank"
                    href={`https://www.kroger.com/search?query=${grocery.item}`}
                >
                    <img
                        src="https://g.foolcdn.com/art/companylogos/square/kr.png"
                        alt="Kroger Logo"
                    />
                </a>
            </div>
        </div>
    );
};

export default Show;
