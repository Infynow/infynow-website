import "./App.css";
import ContainerExample from "./Screens";
import Contact from "./Screens/Contact/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Screens/Contact/Contact.css";

function App() {
  return (
    <>
      <div className="bg">
        <Contact />

        {/* <ContainerExample/> */}
      </div>
    </>
  );
}

export default App;
