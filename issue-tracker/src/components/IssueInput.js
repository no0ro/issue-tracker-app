import React from 'react'
import {connect} from 'react-redux'

class IssueInput extends React.Component {

    state = {description: ''}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form >
                    <label> Issue: </label>
                    <input type="text" placeholder="Issue Description" name="description" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(IssueInput)