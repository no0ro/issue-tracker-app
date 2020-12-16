import React from 'react'
import {connect} from 'react-redux'
import {addIssue} from '../actions/addIssue'

class IssueInput extends React.Component {

    state = {description: ''}

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Issue: </label>
                    <input type="text" placeholder="Issue Description" name="description" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addIssue})(IssueInput)