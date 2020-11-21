import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import "./TodoList.css";

function TodoList (props) {
    const { activity } = props;
    return (
        <Card className="todo-list" style={{ width: '18rem' }}>
        <Card.Header>Lista delle attività</Card.Header>
            { activity.length > 0 && (<ListGroup className="items-container" variant="flush">
                { activity.map((obj, index) => <ListGroup.Item key={index}>{obj.value}</ListGroup.Item> )}
            </ListGroup>)}
        </Card>
    );
}

export default TodoList;