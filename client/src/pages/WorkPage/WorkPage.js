import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

import './WorkPage.scss';

import ph from '../../assets/homesphereLanding.png'

class WorkPage extends Component {

  render() {
    return (
      <>
        <Hero props={this.props} stroke="#F8F1C7" fill="#F8F1C7" heroClass="hero" captionClass="hero-caption" outlineViewbox="0 0 977 1164" filledViewbox="0 0 977 1080" outlineClass="hero__shape-blueOutline" shapeClass="hero__shape-blueFilled" path="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z" />
        <section className="main">
          <div className="main__content">
            <div className="main__content-block">
              <div className="main__content-block__col">
                <div className="main__content-block__card">
                  <div className="main__content-block__card-imageContainer">
                    <img className="main__content-block__card-image" src={ph} alt="" />
                  </div>
                  <svg className="main__content-block__card-svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fbf7de" />
                    <path className="main__content-block__card-svgline" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="#fbf7de" strokeWidth="3" fill="transparent" />
                  </svg>
                  <div className="main__content-block__card-content">
                    <h2 className="main__content-block__card-content__title">HOMESPHERE</h2>
                    <ul className="main__content-block__card-content__list">
                      <li>Design</li>
                      <li>Front-end</li>
                    </ul>
                    <p className="main__content-block__card-content__pargraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="main__content-block__col">
                <div className="main__content-block__card">
                  <div className="main__content-block__card-imageContainer">
                    <img className="main__content-block__card-image" src={ph} alt="" />
                  </div>
                  <svg className="main__content-block__card-svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fbf7de" />
                    <path className="main__content-block__card-svgline" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="#fbf7de" strokeWidth="3" fill="transparent" />
                  </svg>
                  <div className="main__content-block__card-content">
                    <h2 className="main__content-block__card-content__title">HOMESPHERE</h2>
                    <ul className="main__content-block__card-content__list">
                      <li>Design</li>
                      <li>Front-end</li>
                    </ul>
                    <p className="main__content-block__card-content__pargraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WorkPage;
