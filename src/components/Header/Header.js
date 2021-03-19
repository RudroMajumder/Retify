import React from 'react';
import { Nav, Navbar } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    const navItemStyle={
        color: "white",
        fontSize: "20px",
        paddingRight: "20px",
        textDecoration: "none"
    }
    const loginBtn={
        padding:"5px",
        textDecoration: "none",
        width: "50px",
        border:"none",
        fontSize:'15px'
    }
    return (
      <div>
        <Navbar bg="none" expand="lg">
          <Link to="/home" className="brand"> Rentify  </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <Link to="/home" style={navItemStyle}>  Home  </Link>
              <Link to="/destination" style={navItemStyle}>  Destination </Link>
              <Link to="/blog" style={navItemStyle}>  Blog  </Link>
              <Link to="/contact" style={navItemStyle}> Contact  </Link>
              <Link to="/login"> <button className="login-btn" style={loginBtn}>  Login </button> </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;