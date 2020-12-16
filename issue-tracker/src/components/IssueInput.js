import React from 'react'
import {connect} from 'react-redux'

class IssueInput extends React.Component {

    render() {
        return (
            <div>
                inside IssueInput.js
            </div>
        )
    }
}

export default connect()(IssueInput)