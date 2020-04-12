import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

import './AboutPage.scss';

import myPicture from '../../assets/Toqa_Mouhamed.jpg'
class AboutPage extends Component {

  render() {

    return (
      <>
        <Hero props={this.props} fill="#DAF8FF" heroClass="hero hero-about" outlineViewbox="0 0 977 1164" filledViewbox="0 0 977 1080" outlineClass="hero__shape-blueOutline" shapeClass="hero__shape-blueFilled" path="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z" />
        <main className="main">
          <div className="main__content">
            <div className="main__content-block">
              <div className="main__content-block__left">
                <div className="main__content-block__left-image">
                  <img src={myPicture} alt="person" />
                  <div className="main__content-block__left-overlay"></div>
                </div>
              </div>
              <div className="main__content-block__right">
                <div className="main__content-block__right-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default AboutPage;
