import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <Link to='/projects'> All Projects</Link>
            <Link to='/items/new'> Add a Project</Link>

        </div>
    )
}

export default NavBar