import React from 'react'
import axios from 'axios'
import { Card, Form, Col, InputGroup, Button } from 'react-bootstrap'
import { MdLock, MdLockOpen } from 'react-icons/md'


export let SessionInfo = (props) => {
    let status

    let endSession = (name) => {
        axios.put(process.env.REACT_APP_API_URL + 'sessions/' + name, {open: false}).then((res) => {
            console.log(`end session ${name}`)
            window.location.reload()
        })
    }

    let seeDetails = (name) => {
        window.location.href = `/result/${name}`
    }

    let deleteSession = (name) => {
        console.log(`delete session ${name}`)
    }

    if(props.open)
        status = (<InputGroup.Text style={{backgroundColor: '#5ac18e'}}><MdLockOpen /></InputGroup.Text>)
    else
        status = (<InputGroup.Text style={{backgroundColor: '#fd837b'}}><MdLock /></InputGroup.Text>)

    return(
        <div className="SessionInfo">
            <Card style={{margin: '2vh', backgroundColor: '#f0f0f0'}}>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Session</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    {status}
                                </InputGroup.Prepend>
                                <Form.Control type="text" readOnly defaultValue={props.name}/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Template</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={props.template}/>
                        </Form.Group>
                        <Form.Group as={Col} md={{ span: 2, offset: 2 }}>
                            {
                                props.open &&
                                <Button block variant="outline-secondary" onClick={() => endSession(props.name)}>Terminer la session</Button>
                            }
                            {
                                !props.open &&
                                <Button block variant="outline-secondary" onClick={() => seeDetails(props.name)}>Résultat</Button>
                            }
                            <Button block variant="outline-danger" onClick={() => deleteSession(props.name)}>Supprimer</Button>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </Card>
        </div>
    )
}