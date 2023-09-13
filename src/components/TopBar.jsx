import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useLocation } from "react-router-dom";

function TopBar() {
  const location = useLocation();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">
        <img src="assets/img/netflix_logo.png" width="100" height="47" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
            TV Shows
          </Link>

          <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="MovieDetails">
            Movies
          </Link>
          <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
            Recently Added
          </Link>
          <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
            My List
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <Nav.Link href="#">
          <Icon.Search color="white" />
        </Nav.Link>
        <Nav.Link href="#">KIDS</Nav.Link>
        <Nav.Link href="#">
          <Icon.BellFill color="white" />
        </Nav.Link>
      </Nav>
      <Nav.Link href="#">
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="secondary"
            title={
              <>
                <img src="assets/img/avatar.png" width="50" height="50" alt="logo" />
              </>
            }
          >
            <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
          </DropdownType>
        ))}
      </Nav.Link>
    </Navbar>
  );
}

export default TopBar;
