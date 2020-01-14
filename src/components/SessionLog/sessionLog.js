import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Card, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import { MdVpnKey } from 'react-icons/md'
import './sessionLog.css'


export let SessionLog = () => {

    let goToSession = async () => {
        let sessID = document.getElementById("sessionForm.IdInput").value
        const res = await axios.get(process.env.REACT_APP_API_URL + 'section/' + sessID)
        if(res.data.access === 'ok')
            window.location = '/section/' + sessID
        else {
            ReactDOM.render(<Alert variant="danger">Session ID est introuvable</Alert>, 
                document.getElementById('errorBox'));
        }
        
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
                            <div id="errorBox"></div>
                            <Form.Group controlId="sessionForm.IdInput" name='section'>
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
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
}