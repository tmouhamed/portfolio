import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

class WorkPage extends Component {

  render() {
    return (
        <>
        <Hero props= {this.props} fill="#F8F1C7" heroClass="hero"  outlineViewbox="0 0 977 1164" filledViewbox="0 0 977 1080" outlineClass="hero__shape-outline" shapeClass="hero__shape-filled" path="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z"/>
        </>
    );
  }
}

export default WorkPage;
