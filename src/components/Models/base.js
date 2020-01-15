import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'


export let BaseModel = (props) => {

    
    let onValidate = () => {
        let result = []
        let elements = document.getElementsByName("radioGroup")

        elements.forEach((element) => {
            let infos = element.id.split('-')
            if(element.checked)
                result.push({id: infos[1], value: infos[2]})
        });
        if(result.length !== props.template.sources.length)
            alert('Il manque des reponses')
        else
            console.log(result)
    }

    return(
        <div className="BaseModel">
        {    
            props.template.sources.map((item, index) => {
                return(
                    <Card key={index} style={{margin: '2vh', backgroundColor: '#f0f0f0'}}>
                        <Card.Body>
                            <Card.Title>{item.id} - {item.q}</Card.Title>
                            <Form style={{paddingTop: '1vh'}}>
                                <Form.Group>
                                {
                                    props.template.resp.map((res, index) => {
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
            <Button onClick={onValidate} style={{backgroundColor: '#530087', borderColor: '#530087'}}>Valider</Button>
        </div>
    )
}