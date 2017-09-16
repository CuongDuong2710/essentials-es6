import React, { Component } from 'react'
import ReactDOM from 'react-dom' //this handles actually rendering react elements

const api_key = '6fab9e81b0b0ba2f60f1befb0b507074';

class App extends Component { //it will inherit a bunch of useful methods from 'Component' class
  // 'props' checks for data and paired components that allow constructor to manipulate data
  constructor(props) {
    super(props)
    // all component contain the relevant data in an object called 'state'
    this.state = {
      city: 'San Francisco',
      description: ''
    }
  }

  // This allow us to run code when the app fully renders on the screen
  componentDidMount() {
    this.grabWeather(this.state.city)
  }

  grabWeather(city) {
    // 'fetch' to use handle setting a web request the API for your application
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({description: json.weather[0].description})
      })
  }

  render() {
    return (
      <div>
        <h1>Weather report for {this.state.city}</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

// first agrument: it's a component that we want to render
// second agrument: whatever <div> we want render
ReactDOM.render(<App />, document.getElementById('root'))