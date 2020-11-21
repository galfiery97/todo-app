import React, { useState } from "react";
import "./TodoForm.css";
import { Form, Col, Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TodoForm({setActivity}) {
    const [ value, setValue ] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        setActivity(value);
    }
    return (
        <Form className="todo-form">
            <Form.Row>
                <h5> Inserisci le attività da svolgere </h5>
            </Form.Row>
            <Form.Row controlid="formBasicEmail">
                <Col xs="auto">
                    <Form.Control onChange={handleChange} type="text" placeholder="Inserisci attività" />
                </Col>
                <Col xs="auto">
                    <Button onClick={handleSubmit} variant="primary" >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default TodoForm;