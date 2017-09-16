import React, { Component } from 'react'
import ReactDOM from 'react-dom' //this handles actually rendering react elements

class App extends Component { //it will inherit a bunch of useful methods from 'Component' class
  render() {
    return (
      <div>React JS and JSX in action!</div>
    )
  }
}

// first agrument: it's a component that we want to render
// second agrument: whatever <div> we want render
ReactDOM.render(<App />, document.getElementById('root'))