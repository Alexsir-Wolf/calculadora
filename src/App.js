import "./App.css";
import Calculator from "./components/Calculator";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Calculator></Calculator>
      <Footer></Footer>
    </div>
  );
}

export default App;
