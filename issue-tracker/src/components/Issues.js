import React from 'react'
import {connect} from 'react-redux'
import {deleteIssue} from '../actions/deleteIssue'
import IssuesWorking from '../components/IssuesWorking'



const Issues = (props) => {
    // create fn to handle event
    const onChange = () => {
        alert("onChange Test")
        // this.setState({ color: 'green'})
        //  <div onClick={this.props.onChange}>
    }


    const handleDelete = (issue) => {
        // debugger
        props.deleteIssue(issue.id, issue.project_id);
    };

    // dont need to iterate through, bc this fn will only be called on submit....so probs needs to not be in here?
    // const handleStatue = (issue) => {
    //     if (this.props.working === true) {// or exists? 
    //         // pass to IssuesWorking
    //     }
    // }

    return (
        <div onClick={() => onChange()}>
            {props.issues && props.issues.map( (issue) => 
                <li key={issue.id}>
                    {issue.description} - {issue.working}  {issue.kind} <button onClick={() => handleDelete(issue)}> X </button>
                </li>
            )}
            <IssuesWorking   />

        </div>
    );
}

export default connect(null, {deleteIssue})(Issues)
//{/* <li key={issue.id}>{issue.description}  {issue.done}  {issue.kind} {issue.working}</li> */}

// if working === true, pass the component to IssuesWorking to Render there 
// if done === true, pass component to done component