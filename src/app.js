import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <section>
        <NavBar user={true}/>
        <HomePage />
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
