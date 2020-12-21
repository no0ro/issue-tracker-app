import React from 'react'
import {connect} from 'react-redux'
import {deleteIssue} from '../actions/deleteIssue'

const Issues = (props) => {
    // console.log(props.issues)

        // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }
    

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

    return (
        <div onClick={() => onChange()}>
            {props.issues && props.issues.map(issue => <li key={issue.id}>{issue.description} <button onClick={() => handleDelete(issue)}> Issue Resolved </button></li>
            )}
        </div>
    );
}

export default connect(null, {deleteIssue})(Issues)
//{/* <li key={issue.id}>{issue.description}  {issue.done}  {issue.kind} {issue.working}</li> */}

// if working === true, pass the component to IssuesWorking to Render there 
// if done === true, pass component to done component