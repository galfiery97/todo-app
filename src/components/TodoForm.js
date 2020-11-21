import React from "react";
import "./TodoForm.css";
import { Form, Col, Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TodoForm({setInputText}) {
    function handlerText(e) {
        setInputText(e.target.value)
        console.log(e.target.value);
    }
    return (
        <Form className="todo-form">
            <Form.Row>
                <h5> Inserisci le attività da svolgere </h5>
            </Form.Row>
            <Form.Row controlid="formBasicEmail">
                <Col xs="auto">
                    <Form.Control type="text" onChange={handlerText} placeholder="Inserisci attività" />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default TodoForm;