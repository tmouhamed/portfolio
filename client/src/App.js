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
import brainflex from './assets/brainflex.png'
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
      description: "An online medical journal that includes mySQL saved medical articles, and classifieds posting platform with a payment system for the users. ",
      usedLang: ["HTML", "CSS", "PHP", "Drupal", "MySQL"],
      photo: bcmj,
      link: "https://www.bcmj.org/"
    },
    {
      name: "Homeshphere",
      description: "A platform that connect real state agents with renters. It allows agents to post their properties and handle all rental viewings and applications with minimum effort.",
      usedLang: ["HTML", "CSS3", "React.js", "Express.js"],
      photo: homeLogo
    },
    {
      name: "inStock",
      description: "Collaborative programming project utilizing Jira software to coordinate project tickets in an agile environment. Web application allowing users to find, add, or remove warehouse and inventory data.",
      usedLang: ["CSS3", "React.js", "Express.js" ],
      photo: inStock,
      link: "https://github.com/Ivan1023/instock-roy-6"
    },
    {
      name: "Bandsite",
      description: "A multi-page website which allows users to post comments and view upcoming band show date information in a table format. Information was generated from a RESTful API using axios and comments were posted via JavaScript and axios.",
      usedLang: [" HTML5", "CSS3" , "Javascript"],
      photo: bandSite,
      link: "https://github.com/tmouhamed/toqa-mouhamed-bansdite/tree/master/sprint-3"
    },
    {
      name: "Brainflex",
      description: "A video streaming platform where users can upload their videos with descriptions. Axios was used to post videos and content as well as to populate data from the RESTful API, which was built using Node and Express.js on the server side.",
      usedLang: ["HTML", "CSS3", "React.js", "Express.js"],
      photo: brainflex,
      link: "https://github.com/tmouhamed/toqa-mouhamed-brainflix/tree/master/sprint3"
    },
    {
      name: "Todo List Application",
      usedLang: ["HTML", "CSS3", "React.js", "Express.js"],
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
