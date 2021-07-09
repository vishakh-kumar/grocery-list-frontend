import Header from "./components/Header";
import Main from "./components/Main";
import { auth } from "./services/firebase";
import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
        //cleanup effect
        return unsubscribe;
    }, []);

    return (
        <div className="App">
            <Header user={user} />
            <div className="container">
                {user ? (
                    <Main user={user} />
                ) : (
                    <div>
                        <h3>Must Be Logged In To View List</h3>
                        <img
                            style={{ width: "300px", marginTop: "15px" }}
                            src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/04/grocery-list.jpg?fit=1024%2C684&ssl=1"
                            alt="grocery list"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
