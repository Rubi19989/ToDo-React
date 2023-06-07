import { Card, Row, Col, Button, Form, } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'


const Item = (props) => {

    
    return (
        <>
            <Card key = {props.index+100} className='mb-3'>
                <Card.Body>
                    <Row>
                        <Col md='2'>
                        <Form.Check
                        type='switch'
                        id='custom-switch'
                        label='Check this switch'
                        checked={props.item.mark}
                        onChange={() => props.MarkCompleteTask(props.index)} />    
                        </Col>

                        <Col md='8' >
                            {props.item.text}
                        </Col>

                        <Col md='2'>

                            <Button variant="dark" onClick={() => props.DeleteTask(props.index)}>
                                <Trash />
                            </Button>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;