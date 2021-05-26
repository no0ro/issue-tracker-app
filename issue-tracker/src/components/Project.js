// PARENT: ProjectsContainer
// CHILDREN: ProjectEdit + IssuesContainer
import React from 'react'
import {Redirect} from 'react-router-dom'
import ProjectEdit from './ProjectEdit'
import IssuesContainer from '../containers/IssuesContainer'

const Project = (props) => {

    let project = props.projects.filter( project => project.id == props.match.params.id)[0]

    return (
      <div>
        <h2>
          {project ? null : <Redirect to='/projects'/>}
          {project ? project.name : null} 
        </h2>
          <IssuesContainer project={project}/><br></br>
          <br></br>
          <br></br>
          <h5> Edit Project </h5>
          <ProjectEdit project={project}/>
      </div>
    )

}

export default Project