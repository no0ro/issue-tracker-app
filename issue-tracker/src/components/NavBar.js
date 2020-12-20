import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Issue Tracker</Navbar.Brand>
                {/* <Nav className="mr-auto"> */}
                    <Link to='/'>Homepage</Link>
                    <Link to='/projects' style={{paddingRight: '10px'}}> All Projects</Link>
                    <Link to='/projects/new'style={{paddingRight: '10px'}}> Add a Project</Link>
                    
            {/* </Nav> */}
            </Navbar>
        </div>
    )
}

export default NavBar