// list of all our Projects - functional component
import React from 'react'
import Project from './Project'

const Projects = (props) => {
    // console.log(props) // an obj of all the props passed in
    return (
        // pass state down to Project (got it from props.projects has access to it)
        <div>   
            {props.projects.map(project => 
                <li key={project.id}> <Project project={project}/> </li>
                )}
        </div>
    )
}

export default Projects