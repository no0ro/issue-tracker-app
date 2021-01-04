// PARENT: /components/Project
// SIBLING: ProjectEdit
// CHILDREN: Issues + IssuesInpuit
import React from 'react'
import IssueInput from '../components/IssueInput'
import Issues from '../components/Issues'
// import Listgroup from 'react-bootstrap/Listgroup'

class IssuesContainer extends React.Component {
// like skeleton for issues - just provides the structure & passes props down from store (passedrenders the component. doesnt 
     render() {
         return (
             <div style={{color: 'gray'}} >
                <IssueInput project={this.props.project}/><br/>
                <h3> Issues: </h3>
                
              
                <Issues issues={this.props.project && this.props.project.issues} />
                
        
             </div>
         )
     }
}

export default IssuesContainer
// project={} passed down from /components/Project
    // so now we're re-passing it down, project={this.props.project} ... in project.js was project={project}

    // {props.issues && props.issues.map( (issue) => {
