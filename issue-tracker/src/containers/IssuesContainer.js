// PARENT: /components/Project
// SIBLING: ProjectEdit
// CHILDREN: Issues + IssuesInpuit
import React from 'react'
import IssueInput from '../components/IssueInput'
import Issues from '../components/Issues'
// import Listgroup from 'react-bootstrap/Listgroup'

class IssuesContainer extends React.Component {

     render() {
         return (
             <div>
                <IssueInput project={this.props.project}/><br/>
                <h3> Issues: </h3>
                
              
                <Issues issues={this.props.project && this.props.project.issues} />
                
        
             </div>
         )
     }
}

export default IssuesContainer
// project={} comes from /components/Project