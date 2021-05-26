// list of all our Projects - functional component
import React from 'react'
import {Route, Link} from 'react-router-dom'
import Project from './Project'
import Listgroup from 'react-bootstrap/Listgroup'

const Projects = (props) => {
    return (
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


