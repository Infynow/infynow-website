import "./App.css";
import Career from "./Feat-Career/Career/Career";
import Carousels from "./Feat-Career/Carrousel/Carousels";

function App() {
  return (
    <div className="App">
      <Carousels />
      <br />
      <div className="career-container">
        <Career />
      </div>
    </div>
  );
}

export default App;
