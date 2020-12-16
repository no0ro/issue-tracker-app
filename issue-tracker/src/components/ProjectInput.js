// form to make new Projects. bc form, needs state, so Class

import React from 'react'

class ProjectInput extends React.Component{
    // SET STATE - giving form state and value make it a controlled form.
    state = { name: ''} 
        // could use constructor syntax instead
        // LOCAL state. not using redux store. 

    // define the fn that will handle the onChange listener
    handleChange = (e) => {
        // e is auto passed in -- debugger
        this.setState({
            name: e.target.value
        })
        
    }

    render() {
        return (
            <div>   
                <form>
                    <label> Project Name: </label>
                    <input type='text' placeholder="Name" value={this.state.name} onChange={this.handleChange}/> 
                </form>
            </div>
        )

    }
}

export default ProjectInput