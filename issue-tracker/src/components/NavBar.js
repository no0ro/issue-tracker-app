import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <Link to='/projects' style={{paddingRight: '10px'}}> All Projects</Link>
            <Link to='/projects/new'style={{paddingRight: '10px'}}> Add a Project</Link>
            <Link to='/'>Homepage</Link>
        </div>
    )
}

export default NavBar