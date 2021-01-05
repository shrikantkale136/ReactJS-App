import "./index.css";
import TableView from "./components/TableView";
import Topbar from "./components/Topbar";
import Navigation from "./components/Navigation";
function App() {
  
  return (
    <div className="App">
      <Topbar />
      <Navigation />
      <TableView />
    </div>
  );
}

export default App;
