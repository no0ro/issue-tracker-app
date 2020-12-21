import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Homepage = () => {
    return(
        <Jumbotron>
            <h1>Welcome to Issue Tracker!</h1>
            <p>
                A space for users to keep track of project issues. Simply create an project and add issues as they arise. Update the status of issues from active, to working, and finally to resolved. 
            </p>
            <p>
                <Button variant="dark">View All Projects</Button>
            </p>
        </Jumbotron>
    
    )
}

export default Homepage
