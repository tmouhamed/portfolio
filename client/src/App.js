import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import WorkPage from './pages/WorkPage/WorkPage';

class App extends Component {
  state = {
    currentPage: null,
    landingPage: [{
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: "more about me"
    }],
    aboutPage: [{
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: "my Work"
    }],
    workPage: [{
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: "my Work"
    }]
  };
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/about" render={(props) => <AboutPage  {...props} info={this.state.aboutPage}/>}/>
            <Route path="/work" render={(props) => <WorkPage  {...props} info={this.state.workPage}/>}/>
            <Route exact path="/" render={(props) => <LandingPage {...props} info={this.state.landingPage}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
