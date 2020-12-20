import React from 'react';
import { connect } from 'react-redux';
import ProjectsContainer from './containers/ProjectsContainer' 

class App extends React.Component {
  // 2. renders Projects Container 
  render() {
    return (
      <div style={{padding: '15px'}} className="App">
        <ProjectsContainer/>
      </div>
    );
  }
}

export default App;  