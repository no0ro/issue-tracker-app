import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchProjects} from '../actions/fetchProjects'
import Projects from '../components/Projects'
import Project from '../components/Project'
import ProjectInput from '../components/ProjectInput'
import NavBar from '../components/NavBar'
import Homepage from '../components/Homepage'
import IssuesContainer from '../containers/IssuesContainer'
import Issues from '../components/Issues'


class ProjectsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchProjects() 
    }

    render () {
        return (
            <div> 
                <NavBar/>
                    <Switch>
                        <Route path='/projects/new' component={ProjectInput}/>  
                        <Route path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects} addLike={this.triggerAddLikeState}/>}/>
                        <Route exact path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects} addLike={this.triggerAddLikeState}/>}/>
                        <Route exact path='/' component={Homepage}/>
                    </Switch>
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    return {
        projects: globalState.projects,
    }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)