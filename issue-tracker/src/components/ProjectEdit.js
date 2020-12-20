import React from 'react'

class ProjectEdit extends React.Component {

    state = {
        name: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let project = {...this.state, id: this.props.project.id}
        this.props.editProject(project)
        this.setState({
            name: ''
        })
    }

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