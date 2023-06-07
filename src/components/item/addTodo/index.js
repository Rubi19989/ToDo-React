import { useState } from 'react';
import {Form, Row ,Col, Button } from 'react-bootstrap'

const AddTodo = (props) => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value)
    }


    return (
        <>
        <Row>
            <Col  md={8}>
                <Form.Control type='text' onChange={(event) => onChange(event)}/>
            </Col>
            <Col md={4}>
            <Button onClick={() => props.UnaPropiedad(value)}>Add</Button>
            </Col>
        </Row>


        </>
    );
}

export default AddTodo;