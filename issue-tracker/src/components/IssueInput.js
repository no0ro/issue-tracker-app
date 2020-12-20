import React from 'react'
import {connect} from 'react-redux'
import {addIssue} from '../actions/addIssue'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class IssueInput extends React.Component {

    state = {
        description: ''
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
            description: ''
        })
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Card.Title> Issue: </Card.Title>
                    <input type="text" name="description" placeholder="Issue Description"  value={this.state.description} onChange={this.handleChange}/>
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