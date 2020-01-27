import React from 'react'
import axios from 'axios'
import { Card, Form, Badge } from 'react-bootstrap'


export class BaseModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { result: Array(this.props.template.sources.length).fill(0).map(x => Array(4).fill(0)) };
    }

    componentDidMount() {
        let result = Array(this.props.template.sources.length).fill(0).map(x => Array(4).fill(0))

        axios.get(process.env.REACT_APP_API_URL + 'results/' + this.props.session).then((res) => {
            res.data.map((results) => {
                results.responses.map((response, index) => {
                    result[index][response.value] = result[index][response.value] +1
                })
            })
            this.setState({ result: result })
        })
    }

    render() {
        return(
            <div className="BaseModel">
            {    
                this.props.template.sources.map((item, index) => {
                    return(
                        <Card key={index} style={{margin: '2vh', backgroundColor: '#f0f0f0'}}>
                            <Card.Body>
                                <Card.Title>{item.id} - {item.q}</Card.Title>
                                <Form style={{paddingTop: '1vh', paddingLeft: '50vh', textAlign: 'left'}}>
                                    <Form.Group>
                                    {
                                        this.props.template.resp.map((res, j) => {
                                            return <div key={j}><Badge variant="info">{this.state.result[index][j]}</Badge> {res}</div>
                                        })
                                    }
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    );
                })
            }
            </div>
        )
    }
}