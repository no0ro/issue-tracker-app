import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Homepage = () => {
    return(
        <Jumbotron>
            <h1>Welcome to Issue Tracker!</h1>
            <p>
                "Details about project will go here "
            </p>
            <p>
                <Button variant="dark">View All Projects</Button>
            </p>
        </Jumbotron>
    
    )
}

export default Homepage
