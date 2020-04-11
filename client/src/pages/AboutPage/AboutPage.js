import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

class AboutPage extends Component {

  render() {
      const { aboutInfo } = this.props;
    return (
        <>
        <Hero info= {aboutInfo}/>
        </>
    );
  }
}

export default AboutPage;
