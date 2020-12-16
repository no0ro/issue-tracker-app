import React from 'react'
import {Redirect} from 'react-router-dom'

import ItemsContainer from '../containers/ItemsContainer'

// functional bc just diaplaying. doesnt need to update or directly access state
const Project = (props) => {
  // console.log(props)
  // props.projects is an array. its alllll of our projects
  let project = props.projects[props.match.params.id - 1] // bc index starts at 0
  console.log(project)

    return (
        // going to need access to a Project, so pass down props
        // CANNOT RENDER AN OBJ inside jsx tags
      <div>
        <h2>
          {project ? null : <Redirect to='/projects'/>}
          {project ? project.name : null}
        </h2>
          <ItemsContainer/>
      </div>
    )

}

export default Project