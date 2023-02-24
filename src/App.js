
import './App.css';
import ShowStudent from "../src/components/showStudent/ShowStudent.js"
import CreatStudent from "./components/creatStudent/CreatStudent.js"

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Studen Managment System</h1>
      </div>

      <div className="show">
        <div className="left">
    <ShowStudent />
    </div>

    <div className="right">
  <CreatStudent/>
    </div>
    </div>
    </div>
  );
}

export default App;
