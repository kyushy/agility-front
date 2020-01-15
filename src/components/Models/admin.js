import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'


export class AdminModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        //mock data 
        this.setState({sections: ["Bigsool", "Yoo pas la"]})
    }

    render() {
        return(
            <div className="AdminModel">
                <Tabs>
                    <Tab eventKey="home" title="Home">
                        <p>This table will be used to create new sections</p>
                    </Tab>
                    {
                        this.state.sections.map((section, index) => {
                            return (
                                <Tab key={index} eventKey={section} title={section}>
                                    This table will show all the eval related to {section} section
                                </Tab>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }

}