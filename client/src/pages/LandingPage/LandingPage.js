import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

class LandingPage extends Component {

  render() {
      const { info } = this.props;
    return (
        <>
        <Hero info= {info}/>
        </>
    );
  }
}

export default LandingPage;
