import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/base.scss';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import WorkPage from './pages/WorkPage/WorkPage';


import homeLogo from './assets/homesphereLanding.png';
import inStock from './assets/inStock.png';
import bandSite from './assets/bandSite.png';
import bcmj from './assets/bcmj.png';
import todo from './assets/todoList.png'

class App extends Component {
  state = {
    currentPage: null,
    landingPage: [{
      description: "I am a Full Stack Developer with an emphasis on responsiveness, who wants to help companies grow through the use of innovative technologies, particularly using front-end tech like React. I'm also comfortable using back-end tech including NodeJS, Express and MongoDB.",
      button: "more about me",
      buttonColor: "linear-gradient(to right, #0c8585, #14dfdf)",
      link: "/about"
    }],
    aboutPage: [{
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: "more about work",
      buttonColor: "linear-gradient(to left, #F9E7A6, #F4D35E)",
      textColor: "#F4C75E",
      link: "/work"
    }],
    workPage: [{
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: "more about me",
      buttonColor: "linear-gradient(to right, #0c8585, #14dfdf)",
      link: "/about"
    }],
    projects: [{
      name: "BCMJ",
      description: "Lorem Ipsum is simply dummy text",
      photo: bcmj
    },
    {
      name: "Homeshphere",
      description: "Lorem Ipsum is simply dummy text",
      photo: homeLogo
    },
    {
      name: "inStock",
      description: "Lorem Ipsum is simply dummy text",
      photo: inStock
    },
    {
      name: "Bandsite",
      description: "Lorem Ipsum is simply dummy text",
      photo: bandSite
    },
    {
      name: "Todo List Application",
      description: "Coming soon",
      photo: todo
    }]
  };
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/about" render={(props) => <AboutPage  {...props} info={this.state.aboutPage} />} />
            <Route path="/work" render={(props) => <WorkPage  {...props} info={this.state.workPage} projects={this.state.projects} />} />
            <Route exact path="/" render={(props) => <LandingPage {...props} info={this.state.landingPage} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
