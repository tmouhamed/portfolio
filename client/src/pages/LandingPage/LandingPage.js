import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

class LandingPage extends Component {

  render() {
    return (
        <>
        <Hero props= {this.props} fill="#F9E0D9" heroClass="hero hero-landingPage"  captionClass="hero__caption" outlineViewbox="0 0 665 861" filledViewbox="0 0 665 861" outlineClass="hero__shape-outline" shapeClass="hero__shape-filled" path="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"/>
        </>
    );
  }
}

export default LandingPage;
