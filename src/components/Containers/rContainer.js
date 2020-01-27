import React from 'react'
import axios from 'axios'
import { BaseModel } from '../Models/Answers/base'
import { Alert, Spinner } from 'react-bootstrap'
import base from '../../templates/base.json'


export class RContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, model: (<Spinner animation="border" style={{marginTop: '25vh'}}/>) };
    }

    componentDidMount() {
        let model

        let url = window.location.href
        let sessID = url.split('/').pop()

        axios.get(process.env.REACT_APP_API_URL + 'sessions/' + sessID).then((res) => {
            if(res.data === null) {
                model = (<Alert variant="danger">Cette session n'existe pas</Alert>)
            } 
            else if(res.data.open) {
                model = (<Alert variant="danger">Cette session est toujours en cours</Alert>)
            }
            else {
                switch(res.data.template) {
                    case 'base':
                        model = (<BaseModel session={sessID} template={base} />)
                        break
                    default:
                        model = (<Alert variant="danger">Impossible de charger le template</Alert>)
                }
            }

            this.setState({ loading: false, model: model })
        })
    }

    render() {
        return(
            <div className="RContainer" style={{width: '100%', paddingTop: '2vh'}}>
                {this.state.model}
            </div>
        )
    }
}