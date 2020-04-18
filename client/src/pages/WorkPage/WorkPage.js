import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Hero from '../../components/Hero/Hero';

import './WorkPage.scss';

class WorkPage extends Component {

  render() {
    const { projects } = this.props;
    return (
      <>
        <Hero props={this.props} stroke="#F8F1C7" title="A selection of my work!" fill="#F8F1C7" heroClass="hero" landingClass="hero__shape" captionClass="hero-caption" outlineViewbox="0 0 977 1164" filledViewbox="0 0 977 1080" outlineClass="hero__shape-blueOutline" shapeClass="hero__shape-blueFilled" path="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z" />
        <section className="main">
          <div className="main__content">
            <div className="main__content-block">
              {projects.map( project => {
                return(
                  <div className="main__content-block__col" key={uuidv4()}>
                  <div className="main__content-block__card">
                    <div className="main__content-block__card-imageContainer">
                      <img className="main__content-block__card-image" src={project.photo} alt="" />
                    </div>
                    <svg className="main__content-block__card-svg" viewBox="0 0 1440 320">
                      <path fill="#fbf7de" d="M0,0L34.3,37.3C68.6,75,137,149,206,165.3C274.3,181,343,139,411,117.3C480,96,549,96,617,101.3C685.7,107,754,117,823,138.7C891.4,160,960,192,1029,218.7C1097.1,245,1166,267,1234,277.3C1302.9,288,1371,288,1406,288L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                    </svg>
                    <div className="main__content-block__card-content">
                <h2 className="main__content-block__card-content__title">{project.name}</h2>
                <p className="main__content-block__card-content__paragraph">{project.description}</p>
                    </div>
                    <ul className="main__content-block__card-list">
                      <li>Design</li>
                      <li>Front-end</li>
                    </ul>
                  </div>
                </div>
                );
              })}
             </div>
          </div>
        </section>
      </>
    );
  }
}

export default WorkPage;
