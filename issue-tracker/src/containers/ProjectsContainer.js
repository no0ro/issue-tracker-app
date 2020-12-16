import React from 'react'
import { connect } from 'react-redux';

import {Route} from 'react-router-dom'
import {fetchProjects} from '../actions/fetchProjects.js'
import Projects from '../components/Projects'
import ProjectInput from '../components/ProjectInput'

class ProjectsContainer extends React.Component {
   // 2ish. accessing props inside the ProjectsContainer component

   // 3. When Component Mounts
    componentDidMount() {
        // fetchProjects() // issue is that this call inst connect to Redux Store // SO must access function through props // gave access to fetchProjects fn  when we imported 
        // when this container mounts, we have to make this request to the backend
        this.props.fetchProjects() // and add {fetchProjects} to connect to give access
        // 4. fetches Projects from our backend -> /actions/fetchProjects.js
    }

    render () {
        // 3ish then sending those projects down to our <Projects /> component
        return (
            // 9. and then we;re sending those props down to our Projects component ` <Projects projects={this.props.projects}/> ` which is responsible for rendering ALL the projects
            // 10. so we're in the ProjContainer rn, and we're rendering a form component
            <div> 
                <Route path='/projects/new' component={ProjectInput}/>  
                <Route path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects}/>}/>
            </div>
        )
    }
}

// 7. (or 3)- getting projects that we're fetching from backend, putting them in our store
// 1ish. get projects from our redux store
const mapStateToProps = state => {
    // give this component, access through props, to the projects inside our state
    // turn data into props for fetchProjects to use

    // 8. and then we're mapping those projects to props
    return {
        projects: state.projects
        // NOTE: return as {}
    }

}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)
// connect(GET from store, pass actioncreators/reducers)(ProjectsContainer)
// {fetchProjects} - equivelent to mapping dispatchToProps 

// ask, do we want to map state to props? or dispatch to props? or both?