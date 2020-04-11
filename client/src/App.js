import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

class App extends Component {
  state = {
    currentPage: null
  };

  handlePageChange = number => {
    this.setState({
      currentPage: number
    });
  };

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Hero} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
