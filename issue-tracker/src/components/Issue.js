import React from 'react'
import Button from 'react-bootstrap/Button'


class Issue extends React.Component {
    state = {
        likes: 0
    }

    addLike = () => {
     
       
        this.setState( previousState => {
            return {
                likes: previousState.likes + 1 
            }
        })
    }

    render() {
    const {issue, handleWorkingToggle, handleDelete, addLike} = this.props     
        return (
            <div>
              
               <h3> Issue: </h3>
              <li key={issue.id}  style={{marginBottom: "2.5em"}}>
                           
                                TYPE: {issue.kind} -> {issue.description} {issue.working} {issue.likes}<br></br>  

                                <Button variant="dark" size="sm" onClick={() => handleWorkingToggle(issue)} > Working </Button>
                                <Button variant="dark" size="sm" onClick={() => handleDelete(issue)} style={{marginLeft: "2.5em"}}> x </Button>
                                <Button variant="dark" size="sm" onClick={() => this.addLike()} style={{marginLeft: "2.5em"}}> Likes: {this.state.likes}  </Button>

                </li>    
               

            </div>
        )
    }


}

export default Issue