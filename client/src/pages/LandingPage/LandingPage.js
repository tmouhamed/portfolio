import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

class LandingPage extends Component {

  render() {
    return (
        <>
        <Hero props= {this.props}/>
        </>
    );
  }
}

export default LandingPage;
