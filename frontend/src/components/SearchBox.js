import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="px-5">
      <InputGroup>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="outline-success" className="p-2">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBox;