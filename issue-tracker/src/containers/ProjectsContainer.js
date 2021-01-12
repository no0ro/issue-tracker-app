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
    state = {
        likes: 0
    }
   // 2ish. accessing props inside the ProjectsContainer component

   // 3. When Component Mounts
    componentDidMount() {
        // fetchProjects() // issue is that this call inst connect to Redux Store // SO must access function through props // gave access to fetchProjects fn  when we imported 
        // when this container mounts, we have to make this request to the backend
        this.props.fetchProjects() // and add {fetchProjects} to connect to give access
        // 4. fetches Projects from our backend -> /actions/fetchProjects.js
    }

    // set state 



    triggerAddLikeState = () => {
        alert("inside onLike")
        this.setState( previousState => {
            return {
                likes: previousState.likes + 1 
            }
        })
    }




    // onLike={this.onLikeNewName}
    // onLikesClick={this.props.handleLikeIncrement}
    //onClick={this.newHandleLike}
    // && this.props.likes
    // like={this.props.likes}

    render () {
        // 3ish then sending those projects down to our <Projects /> component
        return (
            // 9. and then we;re sending those props down to our Projects component ` <Projects projects={this.props.projects}/> ` which is responsible for rendering ALL the projects
            // 10. so we're in the ProjContainer rn, and we're rendering a form component
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

// 7. (or 3)- getting projects that we're fetching from backend, putting them in our store
// 1ish. get projects from our redux store
const mapStateToProps = globalState => {
// - !!!! give this component, access through props, to the projects inside our state
    // turn data into props for fetchProjects to use

    // 8. and then we're mapping those projects to props
    return {
        projects: globalState.projects,
        likes: 0 // dont do  

        // NOTE: return as {}
    }

}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)
// connect(GET from store, pass actioncreators/reducers)(ProjectsContainer)
// {fetchProjects} - equivelent to mapping dispatchToProps 
        // mapDispatchToProps is used for dispatching actions to the store

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// component doesnt need to GET state, it just needs to ADD things to state

// ask, do we want to map state to props? or dispatch to props? or both?

// DOESNT PASS PROPS bc ProjectInput has local store. so just render component
// <Route path='/projects/new' component={ProjectInput}/>  
