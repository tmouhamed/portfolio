import React, { Component } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import ReactPageScroller from 'react-page-scroller';
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
      <React.Fragment>
        <ReactPageScroller pageOnChange={this.handlePageChange} customPageNumber={this.state.currentPage}>
          <Hero />
          <About />
          <Work />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

export default App;
