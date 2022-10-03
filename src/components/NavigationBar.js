import "../css/NavigationBar.css";
import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Night from "../dark theme icons/moon.png";
import Day from "../dark theme icons/sun.png";

function NavigationBar() {
  const [mode, setMode] = useState(Night);
  
  let body = document.body;
  const name = document.getElementById("name");
  const icons = document.getElementsByClassName("fa-brands");
  const HandlerMode = () =>{
    if(mode === Night ){
      setMode(Day);
      body.style.background = "#2a3444";
      body.style.color = "white";
      name.style.color = "yellow";
      icons.style.color = "white";
    }else if(mode === Day){
      body.style.background = "white";
      setMode(Night);
      body.style.color = "black";
      name.style.color = "blue";
      icons.style.color = "#2a3444";
    }
  }

  return (
    <div id="nav" className="pt-3 pb-1 bg-black position-sticky top-0">
      <Container>
        <Row>
          <Col>
            <Nav className="mt-2">
              <ul>
                <li><NavLink id="tags" to="/" end>Home</NavLink></li>
                <li><NavLink id="tags" to="/about">About</NavLink></li>
                <li><NavLink id="tags" to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink id="tags" to="/contact">Contact</NavLink></li>
              </ul>
            </Nav>
          </Col>
          <Col>
            <div className="mt-2" style={{float: 'right'}}>
              <button onClick={HandlerMode} style={{background: "none", border: "none"}}>
                <img style={{width: "30px"}} src={mode} alt="mode" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavigationBar;