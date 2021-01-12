import React from 'react'
import {connect} from 'react-redux'
import {addIssue} from '../actions/addIssue'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class IssueInput extends React.Component {
 // LOCAL state. not using redux store. 
 // SET STATE - giving form state and value make it a controlled form.

    state = {
        description: '',
        working: '',
        // likes: 0,
        kind: 'bug'
        
    }

    handleChange = (e) => {
        // updates DOM View form(state) as we go/type/clicks 
        this.setState({
            [e.target.name]: e.target.value
            // ["working"]: "on"
        })
    }

    // addLikesAttribute = (x) => {
    //     this.setState({
    //         likes: x
    //     })
    // }

    handleSubmit = (e) => { // on submit, likes: 0 exists in state
        e.preventDefault()
      
        console.log(this.state) // HERE like: 0!! aka after submit form, the new issue has a likes attribute with initial state likes set to 0!
        
        // let x = 0
        // this.addLikesAttribute(x)

        // console.log(this.state)
        // console.log(this.props) // shows no knowledge of likes! at all! now
        // issue is, saving to state, but not passing to props
        // SOO ask where are props getting passed from? from mapStateToProps in ProjectsContainer.js
                // bc bdlow we add state to props VIA redux things...aka actions(aka connect) aka reducers...so by the time it gets back to return out of this fn, likes never had a chance to get saved (?)


        // before we hit this line, must add likes props into state 
        this.props.addIssue(this.state, this.props.project.id) // action
        // console.log(this.props) // at this point, none of the submitted form shows up in props yet. 
        this.setState({
            description: '',
            working: '',
            // likes: 0,
            kind: 'bug'
           
        })
        // console.log(this.props) // now 

    }
   
    // <Button variant="dark" size="sm" onClick={() => handleLike(issue(e, id))} style={{marginLeft: "2.5em"}}> Value</Button>


    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Card.Title> Add a New Issue: </Card.Title>
                    <input type="text" name="description" placeholder="Issue Description"  value={this.state.description} onChange={this.handleChange}/>
           
                    <Form.Group id="formGridCheckbox">
                         <Form.Check type="checkbox" name="working" label="Working" checked={this.state.working} onChange={this.handleChange} />
                    </Form.Group>
         
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>bug</option>
                        <option>task</option>
                        <option>feature</option>
                    </select>

                    {/* <Button variant="dark" name="likes" value={this.state.likes} style={{marginLeft: "2.5em"}}> Initial Likes: {this.state.likes}</Button> */}


                    <br></br>
                    <br></br>
                    <Button variant="dark" type="submit" size="sm">
                        Add Issue
                    </Button>
                    {/* <input type="submit"/> */}
                </Form>
            </div>
            
            </Card.Body>
            </Card>
        )
    }
}

export default connect(null, {addIssue})(IssueInput)
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

// The presence of the "checked" property specifies the status. The value is irrelevant/not needed.
// <input type="checkbox" checked="checked" />





// Cooler Ways to do check box -- Tinkering
    // <div key={`inline-${'checkbox'}`} className="mb-3">
    // <Form.Check inline label="working" type={'checkbox'} id={`inline-${'checkbox'}-working`} value={this.state.working} onChange={this.handleChange} />
    // <Form.Check inline label="done" type={'checkbox'} id={`inline-${'checkbox'}-done`} value={this.state.done} onChange={this.handleChange} />
    // </div>


    // <div key={`inline-${'checkbox'}`} className="mb-3">
    // <Form.Check inline label="working" type={'checkbox'} id={`inline-${'checkbox'}-working`} value={this.state.working} onChange={this.handleChange} />
    // </div>