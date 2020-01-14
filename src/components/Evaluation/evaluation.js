import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import base from '../../templates/base.json'


export class Evaluation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {template: base, result: []};

        this.onValidate = this.onValidate.bind(this);
    }

    onValidate() {
        let result = []
        let elements = document.getElementsByName("radioGroup")

        elements.forEach((element) => {
            let infos = element.id.split('-')
            if(element.checked)
                result.push({id: infos[1], value: infos[2]})
        });
        if(result.length !== this.state.template.sources.length)
            alert('Il manque des reponses')
        else
            console.log(result)
    }

    render() {
        return(
            <div className="Evaluation">
                {
                    this.state.template.sources.map((item, index) => {
                        return(
                            <Card key={index} style={{margin: '2vh', backgroundColor: '#f0f0f0'}}>
                                <Card.Body>
                                    <Card.Title>{item.id} - {item.q}</Card.Title>
                                    <Form style={{paddingTop: '1vh'}}>
                                        <Form.Group>
                                        {
                                            this.state.template.resp.map((res, index) => {
                                                return <Form.Check name="radioGroup" id={`check-${item.id}-${index}`} key={index} inline label={res} type="radio"  />
                                            })
                                        }
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            <Button onClick={this.onValidate} style={{backgroundColor: '#530087', borderColor: '#530087'}}>Valider</Button>
            </div>
        );
    }
}