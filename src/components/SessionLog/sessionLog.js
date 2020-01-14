import React from 'react'
import { Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { MdVpnKey } from 'react-icons/md'
import './sessionLog.css'


export let SessionLog = () => {

    function goToSession() {
        let sessID = document.getElementById("sessionForm.IdInput").value
        window.location = '/section/' + sessID
    }

        return(
            <div className="SessionLog">
                <div className="SessionTitle">
                    <h1>Agile Manifesto</h1>
                    <p style={{color: 'gray'}}>Evaluez votre maturité en agilité selon les "valeurs" et les principes du Manifeste Agile</p>
                </div>
                <div className="SessionForm">
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="sessionForm.IdInput">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><MdVpnKey /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Session ID" />
                                    </InputGroup>
                                </Form.Group>
                                <Button 
                                    onClick={goToSession} 
                                    style={{backgroundColor: '#530087', borderColor: '#530087'}}
                                >
                                    Ouvrir
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
}