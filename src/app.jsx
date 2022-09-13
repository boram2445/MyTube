import "./reset.css";
import "./global.css";
import HomePage from "./pages/homePage/HomePage";

function App({ youtube }) {
  return (
    <div className="app">
      <HomePage youtube={youtube} />
    </div>
  );
}

export default App;
