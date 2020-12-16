import React from 'react'
import IssueInput from '../components/IssueInput'
import Issues from '../components/Issues'


class IssuesContainer extends React.Component {
     render () {
         return (
             <div>
                 <IssueInput/>
                 <Issues issues={this.props.project && this.props.project.issues}/>
             </div>
         )
     }

}

export default IssuesContainer