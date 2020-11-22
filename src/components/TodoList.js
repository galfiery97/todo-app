import React, { useEffect, useState } from "react";
import { ListGroup, Card } from "react-bootstrap";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList (props) {
    const { items, setItems } = props;
    const url = "http://localhost:3000/Data.json";
    let content = null;
    
    useEffect (async () => {
        const response = await fetch(url)
        const object = await response.json();
        setItems(items.concat(object));

    }, [url])

    if (items.length > 0) {
        content = (
            <Card variant="primary" className="todo-list">
            <Card.Header>Lista delle attività</Card.Header>
                { items.map((obj, index) => 
                    <Todo items={items} setItems={setItems} key={index} index={index} obj={obj} />
                )}
            </Card>
        );
    }
    
    return (
        <div>
            {content}
        </div>
    )

}

export default TodoList;