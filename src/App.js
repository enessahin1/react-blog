import React, { Component } from 'react'
import Login from './containers/Login/login.js';
import Register from './containers/Register/register.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // 1 -> Login Page
    // 2 -> Register Page
    // 3 -> Password Reset

    this.state = {
      currentView: 1
    }
  }

  changeView = (newView) => {
    this.setState({
      currentView: newView
    })
  }

  render() {
    const view = this.state.currentView === 1
      ? <Login onViewChange={this.changeView} />
      : <Register onViewChange={this.changeView} />
    return (
      <div className="App">
        {view}
      </div>
    )
  }
}

export default App;
