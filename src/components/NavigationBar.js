import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LightAndDarkMode from "./LightAndDarkMode";

function NavigationBar() {
  return (
    <div className=" position-sticky top-0 bg-success">
      <Container>
        <Row>
          <Col>
            <Nav>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </Nav>
          </Col>
          <Col>
            <LightAndDarkMode />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavigationBar;