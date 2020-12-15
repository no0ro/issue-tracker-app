// list of all our Projects - functional component
import React from 'react'

const Projects = (props) => {
    // console.log(props) // an obj of all the props passed in
    return (
        <div>   
            {props.projects.map(project => <li key={project.id}> {project.name} </li>)}
        </div>
    )
}

export default Projects