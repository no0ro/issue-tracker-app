// list of all our Projects - functional component
import React from 'react'
import {Route, Link} from 'react-router-dom'
import Project from './Project'
import Listgroup from 'react-bootstrap/Listgroup'

const Projects = (props) => {
    // console.log(props) // an obj of all the props passed in
    return (
        // pass state down to Project (got it from props.projects has access to it)
        <div>
        <Listgroup>   
            {props.projects.map(project => 
                <Listgroup.Item key={project.id}> 
                    <Link to={`/projects/${project.id}`}>{project.name}</Link> 
                </Listgroup.Item> )}
        </Listgroup>
        </div>
    )
}

export default Projects


