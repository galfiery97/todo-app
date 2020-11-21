import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import "./TodoList.css";

function TodoList ({activity}) {
    return (
        <Card className="todo-list" style={{ width: '18rem' }}>
        <Card.Header>Lista delle attività</Card.Header>
            <ListGroup className="items-container" variant="flush">
                <ListGroup.Item>{activity}</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default TodoList;