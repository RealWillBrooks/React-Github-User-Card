import React from 'react';
import './App.css';
import axios from 'axios';
import Card from '/home/willy/React-Github-User-Card/my-app/src/components/Card.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      followers: []
    };

  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/realwillbrooks`)
      .then(res => this.setState(res))
  }
  render() {

    return (<Card data={this.state.data} />)

  }
}

export default App;
