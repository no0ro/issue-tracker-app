import React from 'react'
import {connect} from 'react-redux'

class IssueInput extends React.Component {

    state = {description: ''}

    render() {
        return (
            <div>
                <form>
                    <label> Issue: </label>
                    <input type="text" placeholder="Issue Description" name="description"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(IssueInput)