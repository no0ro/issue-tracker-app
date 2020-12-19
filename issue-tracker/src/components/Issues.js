import React from 'react'


const Issues = (props) => {
    // console.log(props.issues)

const handleDelete = (issue) => {
        this.props.deleteIssue(issue.id, issue.project_id)
    }

    return (
        <div>
            {props.issues && props.issues.map(issue => 
                <li key={issue.id}>{issue.description} <button onClick={handleDelete}> Issue Resolved </button></li>
            )}
        </div>
    )
}

export default Issues
//{/* <li key={issue.id}>{issue.description}  {issue.done}  {issue.kind} {issue.working}</li> */}