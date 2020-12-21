import React from 'react';
import { connect } from 'react-redux';
import ProjectsContainer from './containers/ProjectsContainer' 
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  // 2. renders Projects Container 
  render() {
    return (
      <Container fluid="md">
        {/* <div style={{padding: '15px'}} className="App"> */}
        <div className="App">

          <ProjectsContainer/>
        </div>
      </Container>
    );
  }
}

export default App;  