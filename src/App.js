import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Main />
            </div>
        </div>
    );
}

export default App;

//  https://www.walmart.com/search/?query=${item}
//  https://www.target.com/s?searchTerm=${item}
//  https://www.kroger.com/search?query=${item}
