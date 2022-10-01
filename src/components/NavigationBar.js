import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"

function NavigationBar() {
  return (
    <Container>
      <Nav>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
      </Nav>
    </Container>
  )
}

export default NavigationBar;