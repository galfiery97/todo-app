import React, { useState } from "react";
import "./TodoForm.css";
import { Form, Col, Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TodoForm(props) {
    const { activity, setActivity } = props;
    const [ value, setValue ] = useState({});
    const values = [];
    function handleChange(e) {
        setValue({value: e.target.value});
    }
    function handleClick() {
        values.push(value);
        setActivity(activity.concat(values));
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
                    <Button onClick={handleClick} variant="primary" >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default TodoForm;