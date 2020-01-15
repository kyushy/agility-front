import React from 'react'
import axios from 'axios'
import { BaseModel } from '../Models/base'
import { AdminModel } from '../Models/admin'
import { Alert, Spinner } from 'react-bootstrap'
import base from '../../templates/base.json'


export class Evaluation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, model: (<Spinner animation="border" style={{marginTop: '25vh'}}/>) };
    }

    componentDidMount() {
        let model

        let url = window.location.href
        let sessID = url.split('/').pop()

        axios.get(process.env.REACT_APP_API_URL + 'section/' + sessID).then((res) => {
            switch(res.data.template) {
                case 'base':
                    model = (<BaseModel template={base} />)
                    break
                case 'admin':
                    model= (<AdminModel />)
                    break
                default:
                    model = (<Alert variant="danger">Impossible de charger le template</Alert>)
            }

            this.setState({ loading: false, model: model , template: base})
        })
    }


    render() {
        return(
            <div className="Evaluation" style={{paddingTop: '2vh'}}>
                {this.state.model}
            </div>
        );
    }
}