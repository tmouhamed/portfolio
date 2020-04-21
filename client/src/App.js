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
      buttonColor: "#14dfdf",
      link: "/about"
    }],
    aboutPage: [{
      description: "I'm a young web developer with a CS degree, a web development diploma, 2 years of experience, and a constant will to learn and improve.",
      photoDescription: "I hold a Computer Science degree from Ain Shams Univeristy, Egypt. After that, I moved to Vancouver. Since then I had worked as a web developer in Ajyal Islamic Center, LatinCouver, then Doctors of BC. After that I had my first daughter, moved to Toronto, and finished a web development diploma from BrainStation. Right now, I'm in the market for a web development position in Toronto. I enjoy being a web developer, I like the diversity of technologies and languages if offers. I like to explore and always have a hunger for learning new things. I'm also a dedicated problem solver, and will stop at nothing until I finish my tasks. I work well alone, I am also a good team player, although I prefer to work in teams.",
      button: "more about work",
      buttonColor: "#F9E7A6",
      textColor: "#F4C75E",
      link: "/work"
    }],
    workPage: [{
      description: "I work to create dev-friendly reusable components that can scale effectively and be applied to any future work. And this is a selection of websites I have built during my time at Doctors of BC, BrainStation, and individual projects I've recently worked on.",
      button: "more about me",
      buttonColor: "#14dfdf",
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
