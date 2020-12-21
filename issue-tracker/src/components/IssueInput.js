import React from 'react'
import {connect} from 'react-redux'
import {addIssue} from '../actions/addIssue'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class IssueInput extends React.Component {

    state = {
        description: '',
        working: true,
        kind: 'bug'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addIssue(this.state, this.props.project.id)
        this.setState({
            description: '',
            working: true,
            kind: 'bug'
        })
    }
   
 
    // <div key={`inline-${'checkbox'}`} className="mb-3">
    // <Form.Check inline label="working" type={'checkbox'} id={`inline-${'checkbox'}-working`} value={this.state.working} onChange={this.handleChange} />
    // <Form.Check inline label="done" type={'checkbox'} id={`inline-${'checkbox'}-done`} value={this.state.done} onChange={this.handleChange} />
    // </div>

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Card.Title> Add a New Issue: </Card.Title>
                    <input type="text" name="description" placeholder="Issue Description"  value={this.state.description} onChange={this.handleChange}/>
           
                        <div key={`inline-${'checkbox'}`} className="mb-3">
                        <Form.Check inline label="working" type={'checkbox'} id={`inline-${'checkbox'}-working`} value={this.state.working} onChange={this.handleChange} />
                        </div>
                    
         
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>bug</option>
                        <option>task</option>
                        <option>feature</option>
                    </select>
                    <br></br>
                    <Button variant="dark" type="submit" size="sm">
                        Add Issue
                    </Button>
                    {/* <input type="submit"/> */}
                </Form>
            </div>
            
            </Card.Body>
            </Card>
        )
    }
}

export default connect(null, {addIssue})(IssueInput)

// The presence of the "checked" property specifies the status. The value is irrelevant/not needed.
// <input type="checkbox" checked="checked" />