import "./App.css";
import Calculator from "./components/Calculator";
import TopBar from "./components/layout/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
