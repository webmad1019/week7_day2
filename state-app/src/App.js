import React, { Component } from 'react'
import './App.css'

import User from './components/User'

class App extends Component {

  constructor() {
    super()

    this.state = {
      counter: 0,
      userA: {
        firstName: 'Germán',
        lastName: 'Alvarez',
        age: 33,
        backColor: 'yellow',
        avatar: 'https://ca-times.brightspotcdn.com/dims4/default/7a68bed/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fca%2Fe1%2F1cce3965c9a2b4f20aed93bd0b90%2Fla-1560957011-xf3aqvrdf1-snap-image'
      },
      userB: {
        firstName: 'Raluca',
        lastName: 'Dana',
        age: 29,
        backColor: 'red',
        avatar: 'https://mwi.usma.edu/wp-content/uploads/2019/01/3988030-1200x640.jpg'
      }
    }
  }


  clickHandler = () => {

    if (this.state.counter != 10) {
      this.setState({ counter: this.state.counter + 1 })
    } else {
      this.setState({
        counter: this.state.counter + 1,
        userA: {
          firstName: 'Germán',
          lastName: 'Alvarez',
          age: 25,
          backColor: 'red',
          avatar: 'https://ca-times.brightspotcdn.com/dims4/default/7a68bed/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fca%2Fe1%2F1cce3965c9a2b4f20aed93bd0b90%2Fla-1560957011-xf3aqvrdf1-snap-image'
        }
      })
    }

  }

  render() {

    return (
      <div className="App">
        <User {...this.state.userA} />
        <User {...this.state.userB} />

        <hr />

        <p>Contador presionado {this.state.counter} veces</p>
        <button onClick={this.clickHandler}>Incrementar contador</button>
      </div>
    );
  }
}

export default App