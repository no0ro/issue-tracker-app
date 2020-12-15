import React from 'react'
import { connect } from 'react-redux';

import Projects from '../components/Projects'
import ProjectInput from '../components/ProjectInput'

class ProjectsContainer extends React.Component {

    render () {
        return (

            <div>   
                <ProjectInput/>
                <Projects/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    // give this component, access through props, to the projects inside our state
    return 
        projects: projects.state

}

export default connect()(ProjectsContainer)

// ask, do we want to map state to props? or dispatch to props?