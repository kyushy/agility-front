import React from 'react'
import axios from 'axios'
import { SessionInfo } from '../SessionInfo/sessionInfo'
import { Modal, Button, Form } from 'react-bootstrap'
import  Fab  from '@material-ui/core/Fab'
import  AddIcon  from '@material-ui/icons/Add'

export class AdminModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, mock: [], show: false };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + 'sessions').then((res) => {
            this.setState({mock: res.data})
        })
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    handleCreate = () => {
        let sessID = document.getElementById('formSessId').value
        axios.post(process.env.REACT_APP_API_URL + 'sessions', {id: sessID, template:"base"}).then((res) => {
            this.handleClose()
            window.location.reload()
        })
    }

    render() {
        return(
            <div className="AdminModel" style={{width: '100%'}}>
            {
                this.state.mock.map((data, index) => {
                    return <SessionInfo key={index} name={data.name} template={data.template} open={data.open} />
                })
            }
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Créer une session</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Session ID" id="formSessId"/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.handleCreate}>
                            Créer
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Fab aria-label="add"
                    onClick={this.handleShow} 
                    style={{position: 'fixed', backgroundColor: 'indigo', color: 'white', right: '2vh', bottom: '2vh'}}>
                    <AddIcon />
                </Fab>
            </div>
        )
    }

}