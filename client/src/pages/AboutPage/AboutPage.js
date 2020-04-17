import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

import './AboutPage.scss';
import frontEnd from '../../assets/front-end.svg';
import backEnd from '../../assets/back-end.svg';
import development from '../../assets/data.svg';
import myPicture from '../../assets/Toqa_Mouhamed.jpg';

class AboutPage extends Component {
  render() {
    return (
      
      <>
        <Hero props={this.props} title="About me!" fill="#DAF8FF" heroClass="hero"  captionClass="hero-caption" outlineViewbox="0 0 977 1164" filledViewbox="0 0 977 1080" outlineClass="hero__shape-blueOutline" shapeClass="hero__shape-blueFilled" path="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z" />
        <section className="main">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="side">
          <div className="side__content">
            <h2 className="side__content-title">Skills</h2>
            <div className="side__content-block">
              <div>
                <div className="side__content-block__icon">
                  <img src={frontEnd} alt="icon" />
                </div>
                <h4 className="side__content-block__title">Front End Development</h4>
                <p className="side__content-block__text">I like to build things from scratch,  I love making pages come to life.</p>
                <div className="side__content-block__code">
                  <h4 className="side__content-block__code-title">Languages I do Love</h4>
                  <ul className="side__content-block__code-list">
                    <li className="side__content-block__code-listItem">HTML/CSS</li>
                    <li className="side__content-block__code-listItem">Sass/Less</li>
                    <li className="side__content-block__code-listItem">Bootstrap</li>
                    <li className="side__content-block__code-listItem">JavaScript</li>
                    <li className="side__content-block__code-listItem">React / Angular</li>
                    <li className="side__content-block__code-listItem">Next.js</li>
                    <li className="side__content-block__code-listItem">GraphQl</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="side__content-block__icon">
                  <img src={backEnd} alt="icon" />
                </div>
                <h4 className="side__content-block__title">Back End Development</h4>
                <p className="side__content-block__text">I like to build things from scratch,  I love making pages come to life.</p>
                <div className="side__content-block__code">
                  <h4 className="side__content-block__code-title">Languages I do Like</h4>
                  <ul className="side__content-block__code-list">
                    <li className="side__content-block__code-listItem">Node.js</li>
                    <li className="side__content-block__code-listItem">Python</li>
                    <li className="side__content-block__code-listItem">PHP</li>
                    <li className="side__content-block__code-listItem">Web API</li>
                    <li className="side__content-block__code-listItem">MongoDB</li>
                    <li className="side__content-block__code-listItem">PostgreSQL</li>
                    <li className="side__content-block__code-listItem">MySQL</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="side__content-block__icon">
                  <img src={development} alt="icon" />
                </div>
                <h4 className="side__content-block__title">Development</h4>
                <p className="side__content-block__text">I like to build things from scratch,  I love making pages come to life.</p>
                <div className="side__content-block__code">
                  <h4 className="side__content-block__code-title">Things I do Enjoy:</h4>
                  <ul className="side__content-block__code-list">
                    <li className="side__content-block__code-listItem">C / C++</li>
                    <li className="side__content-block__code-listItem">Docker / Kubernetes</li>
                    <li className="side__content-block__code-listItem">AWS / Heroku</li>
                    <li className="side__content-block__code-listItem">CMS / Wordpress/Drupal</li>
                    <li className="side__content-block__code-listItem">Agile</li>
                    <li className="side__content-block__code-listItem">Git</li>
                  </ul>
                </div>
              </div>
            </div>
          </div >
        </section >
      </>
    );
  }
}

export default AboutPage;
