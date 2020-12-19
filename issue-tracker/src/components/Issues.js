import React from 'react'
import {connect} from 'react-redux'
import {deleteIssue} from '../actions/deleteIssue'

const Issues = (props) => {
    // console.log(props.issues)

    const handleDelete = (issue) => {
            props.deleteIssue(issue.id, issue.project_id);
    };

    return (
        <div>
            {props.issues && props.issues.map(issue => <li key={issue.id}>{issue.description} <button onClick={() => handleDelete(issue)}> Issue Resolved </button></li>
            )}
        </div>
    );
}

export default connect(null, {deleteIssue})(Issues)
//{/* <li key={issue.id}>{issue.description}  {issue.done}  {issue.kind} {issue.working}</li> */}