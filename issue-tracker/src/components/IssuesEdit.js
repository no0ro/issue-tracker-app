// import React from 'react'
// import {connect} from 'react-redux'
// import {editIssue} from '../actions/editIssue'
// import Button from 'react-bootstrap/Button'

// class IssuesEdit extends React.Component {

//     state = {
//         description: '',
//         working: '',
//         kind: 'bug'
//     }

//     // handleChange = (e) => {
//     //     this.setState({
//     //         [e.target.name]: e.target.value
//     //     })
//     // }


//     // handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     let project = {...this.state, id: this.props.project.id}
//     //     this.props.editProject(project) // action
//     //     this.setState({
//     //         name: ''
//     //     })
//     // }

//     render() {
//         return(
//             // <Card className="text-center">
//             <Card style={{ width: '18rem' }} >
//                 <Card.Body >
//                 <div>
//                     <Form onSubmit={this.handleSubmit}>
//                         <Card.Title> Project Name: </Card.Title>
//                         <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/> 
//                         <Button variant="dark" type="submit" size="sm">
//                             Edit Project
//                         </Button>
//                         {/* <input type="submit"/> */}
//                     </Form>

//                 </div>
//                 </Card.Body>
//             </Card>
//         )
//     }
// }

// export default connect(null, {editIssues})(IssuesEdit)
// // connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// // component doesnt need to GET state, it just needs to ADD things to state