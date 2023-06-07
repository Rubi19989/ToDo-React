import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import Item from "../components/item";
import AddTodo from "../components/item/addTodo";

const ItemList = () => {

    const [tasks, setTasks] = useState([]);

    const CreatenNewTask = (text) => {
        const newTask = {
            text: text,
            mark: false
        }
        setTasks([...tasks, newTask]);
    }


    const DeleteTask = (index) => {
        const newTask = tasks.filter((item) => item.text !== tasks[index].text)
        setTasks(newTask)
    }

    const MarkCompleteTask = (index) => {
        const newTask = tasks;
        newTask[index].mark = true;
        setTasks([...newTask]);
    }

    return (
        <>
            <Container className="d-flex justify-content-center">
                <Card
                    bg='info'
                    key={1}
                    text={'dark'}
                    style={{ width: '40rem' }}
                    className="mb-2"
                >
                    <Card.Header>To Do</Card.Header>
                    <Card.Body>
                        <div className="mb-5">
                            <AddTodo UnaPropiedad={CreatenNewTask} />
                        </div>
                        <div>
                            {
                                tasks.map((item, index) => (
                                    <Item
                                        DeleteTask={DeleteTask}
                                        key={index}
                                        index={index}
                                        item={item}
                                        MarkCompleteTask={MarkCompleteTask}
                                    />

                                ))
                            }
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>

    );
}

export default ItemList;