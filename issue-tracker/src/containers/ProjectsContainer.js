import React from 'react'
import Projects from '../components/Projects'
import ProjectInput from '../components/ProjectInput'

class ProjectsContainer extends React.Component {

    render () {
        return (

            <div>   
                <ProjectInput/>
                <Projects/> 
            </div>
        )
    }
}

export default ProjectsContainer
