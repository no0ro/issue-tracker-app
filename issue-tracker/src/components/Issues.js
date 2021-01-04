import React from 'react'
import {connect} from 'react-redux'
import {deleteIssue} from '../actions/deleteIssue'
import IssuesWorking from '../components/IssuesWorking'
import Button from 'react-bootstrap/Button'


const Issues = (props) => {

    // create fn to handle event
    const onChange = () => {
        console.log("onChange Test")
        // this.setState({ color: 'green'})
        //  <div onClick={this.props.onChange}>
    }

    const handleDelete = (issue) => {
        // debugger
        props.deleteIssue(issue.id, issue.project_id);
    };

    
    const handleWorkingToggle = (issue) => {
        alert("working clicked!")
        let updatedIssue = props.issue.working === true ? false : true
        this.setState({
            working: updatedIssue
        })
    };


    return (
        // if this, return issue into working component
            <div>
                <ol>
                    {props.issues && props.issues.map( (issue) => 
                            <li key={issue.id} onClick={() => onChange()}  style={{marginBottom: "2.5em"}}>
                           
                                TYPE: {issue.kind} -> {issue.description} {issue.working} <br></br>  

                                <Button variant="dark" size="sm" onClick={() => handleWorkingToggle(issue)} > Working </Button>
                                <Button variant="dark" size="sm" onClick={() => handleDelete(issue)} style={{marginLeft: "2.5em"}}> x </Button>
                            
                            </li> 
                            
                    )}
                   
                </ol>
                <IssuesWorking issue={props.issue}/>
            </div>
        );
}

export default connect(null, {deleteIssue})(Issues)
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// component doesnt need to GET state, it just needs to ADD things to state

// null - 
// which part of the Redux global state does
// our component want to receive AS props?

// {deleteIssue}
// which action creators does
// it want to receive BY props?



