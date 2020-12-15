import React from 'react'
import { connect } from 'react-redux';

import {fetchProjects} from '../actions/fetchProjects.js'
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
    // turn data into props for fetchProjects to use

    return {
        projects: state.projects
        // NOTE: return as {}
    }

}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)
// connect(GET from store, pass actioncreators/reducers)(ProjectsContainer)
// {fetchProjects} - equivelent to mapping dispatchToProps 

// ask, do we want to map state to props? or dispatch to props? or both?