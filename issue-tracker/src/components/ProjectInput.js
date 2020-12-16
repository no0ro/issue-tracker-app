// form to make new Projects. bc form, needs state, so Class
import React from 'react'

import {connect} from 'react-redux'

class ProjectInput extends React.Component{
    // SET STATE - giving form state and value make it a controlled form.
    state = { name: ''} 
        // could use constructor syntax instead
        // LOCAL state. not using redux store. 

    // define the fn that will handle the onChange listener
    handleChange = (e) => {
        // e is auto passed in -- debugger
       this.setState({
           // name: e.target.value - abstract name out so its not always pointing to the same obj in mem. ggood for scaling and adding other inputs in future
            [e.target.name]: e.target.value 
  
       })
    }

    handleSubmit = (e) => {
        // to test e - debugger 
        // create new action that addsProject to db 

    }

    render() {
        return (
            <div>   
                <form onSubmit={this.handleSubmit}>
                    <label> Project Name: </label>
                    <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/> 
                    <input type="submit"/>
                </form>
            </div>
        )

    }
}

export default connect()(ProjectInput)