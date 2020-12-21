// form to make new Projects. bc form, needs state, so Class
import React from 'react'
import {connect} from 'react-redux'
import {addProject} from '../actions/addProject'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class ProjectInput extends React.Component{
    // SET STATE - giving form state and value make it a controlled form.
    state = { 
        name: ''
    } 
        // could use constructor syntax instead
        // LOCAL state. not using redux store. 

    // define the fn that will handle the onChange listener
    handleChange = (e) => {
        // e is auto passed in -- debugger
       this.setState({
           // name: e.target.value - abstract name out so its not always pointing to the same obj in mem. ggood for scaling and adding other inputs in future
            [e.target.name]: e.target.value 
       })
    }

    handleSubmit = (e) => {
        // to test e - debugger 
        // create new action that addsProject to db 
        e.preventDefault() // dont submit, prevent rerender, let us use the info first
        this.props.addProject(this.state)
            // get access to these props from connect()
            // this.state - pass in state formData to the addProj action
        this.setState({
            name: ''
        }) // clear imput form after submit. impt bc this is a controlled form 
    }

    render() {
        return (
            <Card style={{ width: '18rem' }} >
                <Card.Body >
                <div>   
                    <Form onSubmit={this.handleSubmit}>
                        <Card.Title> Project Name: </Card.Title>
                        <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                        <br></br>

                        <br/>
                        <Button variant="dark" type="submit" size="sm">
                            Add Project
                        </Button>
                        {/* <input type="submit"/> */}
                    </Form>
                </div>
                </Card.Body>
            </Card>
        )
    }
}

export default connect(null, {addProject})(ProjectInput)
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// component doesnt need to GET state, it just needs to ADD things to state
// so instead of mapDispatchToProps, we directly import {addProject} -- THUNK -- call dispatch ourselves, inside the addProject fn