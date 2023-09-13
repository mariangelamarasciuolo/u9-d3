import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container } from "react-bootstrap";

const Jumbo = () => {
  return (
    <Container className="d-flex mx-0">
      <h1>TV Show</h1>

      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          as={ButtonGroup}
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="sm"
          variant="dark"
          title="Genres"
          className="border rounded-0 mx-4 my-3 px-3 py-0"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </Container>
  );
};
export default Jumbo;
