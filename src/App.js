import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DisplayRoute from "./Route/Rout";
// import SearchBar from "./Component/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        <DisplayRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;