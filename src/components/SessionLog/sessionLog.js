import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Card, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import { MdVpnKey } from 'react-icons/md'
import './sessionLog.css'


export let SessionLog = () => {

    let goToSession = async () => {
        let sessID = document.getElementById("sessionForm.IdInput").value

        if(sessID === '')
            return
        
        const res = await axios.get(process.env.REACT_APP_API_URL + 'sessions/' + sessID, { crossdomain: true })
        console.log(res)
        if(res.data !== null)
            if(res.data.open)
                window.location = '/session/' + sessID
            else {
                ReactDOM.render(<Alert variant="danger">Session verouillée</Alert>, 
                    document.getElementById('errorBox'));
            }
        else {
            ReactDOM.render(<Alert variant="danger">Session introuvable</Alert>, 
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