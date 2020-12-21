// PARENT: ProjectsContainer
// CHILDREN: ProjectEdit + IssuesContainer
import React from 'react'
import {Redirect} from 'react-router-dom'
import ProjectEdit from './ProjectEdit'

import IssuesContainer from '../containers/IssuesContainer'

// functional bc just diaplaying. doesnt need to update or directly access state
const Project = (props) => {
  // console.log(props)
  // props.projects is an array. its alllll of our projects
  // let project = props.projects[props.match.params.id - 1] // bc index starts at 0

    let project = props.projects.filter( project => project.id == props.match.params.id)[0]
  // console.log(project)
    return (
        // going to need access to a Project, so pass down props
        // CANNOT RENDER AN OBJ inside jsx tags
        //  {project ? project.name : null} --> interpolated Project Name
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