import React from "react";
import { Button, Card } from "react-bootstrap";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todo(props) {
    const { index, obj, items, setItems } = props;
    function deleteItem () {
        const values = items.splice(index, 1);
        let difference = items.filter(x => !values.includes(x));
        setItems(difference);
    }
    function doneActivity () {
        let values = items;
        console.log(items)
        console.log(values)
        values[index].done = true;
        setItems(values);
    }
    
    return (
        <Card key={index}  className="todo-item">
            <Card.Body>{obj.value}</Card.Body>
            <Card.Footer className="todo-footer">
                <Button onClick={doneActivity} className="todo-button" variant={obj.done === false ? 'outline-success' : 'success'} >
                    <FontAwesomeIcon icon={faCheck} />
                </Button>
                <Button onClick={deleteItem} className="todo-button" variant="danger" >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Card.Footer>
        </Card>

    );
}

export default Todo;