import React from 'react'
import {connect} from 'react-redux'
import {deleteIssue} from '../actions/deleteIssue'
import IssuesWorking from '../components/IssuesWorking'
import Button from 'react-bootstrap/Button'


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
                    {issue.description} -  {issue.kind} - {issue.working}  
                    <Button variant="dark" size="sm" onClick={() => handleDelete(issue)}> x </Button>
                </li>
                
            )}
            <IssuesWorking />

        </div>
    );
}

export default connect(null, {deleteIssue})(Issues)
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// component doesnt need to GET state, it just needs to ADD things to state


// if working === true, pass the component to IssuesWorking to Render there 


