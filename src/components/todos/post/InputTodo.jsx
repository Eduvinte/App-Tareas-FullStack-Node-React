    import React, { useState } from 'react'
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import Container from 'react-bootstrap/Container';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';

    import { useDispatch } from 'react-redux'
    import { addTodo } from '../store/todoReducer';
    import createTodo from './api';
    import ListTodo from '../get/ListTodo';

    function InputTodo() {
        
        const [description, setDescription] = useState('')
        const dispatch = useDispatch()

        const onSubmitForm = async e => {
            e.preventDefault();
            try {
                const response = await createTodo(description)
                if(response.ok){
                    dispatch(addTodo(description))
                    setDescription('')
                }else{
                    throw new Error('Error al enviar la solicitud')
                }

            } catch (error) {
                console.error(error.message);
            }
        }
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center mt-5'>Pern todo list</h1>
                            <Form onSubmit={onSubmitForm}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="I need to..." 
                                        value={description} 
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="success" type='submit' className='mt-5'>Success</Button>
                            </Form></Col>
                            <ListTodo />
                    </Row>
                </Container>
            </>
        )
    }

    export default InputTodo