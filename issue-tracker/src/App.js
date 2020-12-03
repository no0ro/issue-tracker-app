import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
      fetch('http://localhost:3000/api/v1/projects/3', {
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }



  render() {
    return (
      <div className="App">
        Inside App.js
      </div>
    );
  }
}

export default App;
