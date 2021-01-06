import "./index.css";
import TableView from "./components/TableView";
import Topbar from "./components/Topbar";
import Navigation from "./components/Navigation";
import { Container, Col, Row } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Navigation />
      <Container>
        <Row>
          <Col className="page-header">DC INTEGRATION LOOKUP</Col>
        </Row>
      </Container>

      <TableView />
    </div>
  );
}

export default App;
