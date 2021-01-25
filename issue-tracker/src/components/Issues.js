import React from 'react'
import {connect} from 'react-redux'
import {deleteIssue} from '../actions/deleteIssue'
import IssuesWorking from '../components/IssuesWorking'
import Issue from '../components/Issue'
import Button from 'react-bootstrap/Button'


const Issues = (props) => {
    // BELOW - all const fn's are closures

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
        // this.setState({
        //     working: updatedIssue
        // })
    };

    const addLike = (issue) => {
        alert("inside onLike")
        console.log(issue)
        
        this.setState( previousState => {
            return {
                likes: previousState.likes + 1 
            }
        })
    }

    // on click increment by on, key with id to reference specific
    // const addLike = (issue) => {
    //     // on click, we will grab the 
    //     alert("like clicked")
    //     // console.log(issue)
    //     // console.log(props)
    //     console.log(issue)
    //     let currentLikes = issue.likes
    //     console.log(currentLikes)
    //     this.props.onClick(currentLikes)
    // }

    // {issue.likes}
    
    // this.props.likeIncrementer(this.state.likes)
  
    return (
        // if this, return issue into working component
            <div>
                <ol>
                    {props.issues && props.issues.map( (issue) => 
                        <Issue issue={issue} handleWorkingToggle={handleWorkingToggle} handleDelete={handleDelete} addLike={addLike}/>       
                    )}
                  
                </ol>

               
                <IssuesWorking issuesWorking={props.issue}/>

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



