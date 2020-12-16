import React from 'react'

// functional bc just diaplaying. doesnt need to update or directly access state
const Project = (props) => {
  // console.log(props)
    return (
        // going to need access to a Project, so pass down props
        // CANNOT RENDER AN OBJ inside jsx tags
      <li>
        {props.project.name}
      </li>
    )

}

export default Project