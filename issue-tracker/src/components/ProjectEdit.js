import React from 'react'

class ProjectEdit extends React.Component {

    render() {
        return(
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

export default ProjectEdit