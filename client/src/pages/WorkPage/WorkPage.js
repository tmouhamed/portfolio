import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';

import './WorkPage.scss';

class WorkPage extends Component {

  render() {
    return (
      <>
        <Hero props={this.props} stroke="#F8F1C7" fill="#F8F1C7" heroclassName="hero" outlineViewbox="0 0 977 1164" filledViewbox="0 0 977 1080" outlineclassName="hero__shape-blueOutline" shapeclassName="hero__shape-blueFilled" path="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z" />
        <section className="main">
          <div className="main__content">
            <div className="main__content-block">
              <div className="main__content-block__col">
                <a href="/" className="main__content-block__link">
                  <h2 className="main__content-block__title">HOMESPHERE</h2>
                  <ul className="main__content-block__list">
                    <li>Design</li>
                    <li>Front-end</li>
                  </ul>
                  <div className="main__content-block__logo"></div>
                  <div className="main__content-block__shape">
                    <svg className="main__content-block__shape-filled" width="485" height="408" viewBox="0 0 485 408">
                      <path id="image" fill="#fbf7de" d="M485 23.7617C485 23.7617 381.532 -29.7021 302.624 23.7617C223.716 77.2254 308.895 155.672 243.574 193.146C178.253 230.621 48.6564 216.131 12.5992 270.594C-14.5916 311.664 11.397 368.931 25.8222 394.611C30.6419 403.191 39.8719 408 49.7131 408H455C471.569 408 485 394.569 485 378V23.7617Z" />
                     
                    </svg>

                    <svg className="main__content-block__shape-outline" width="505" height="420" viewBox="0 0 505 420">
                      <path fill="none" stroke="#F8F1C7" strokeWidth="2" d="M317.704 24.8743C358.129 -2.53882 404.868 -2.55433 441.554 4.31342C459.892 7.74634 475.701 12.8962 486.925 17.1881C492.537 19.3338 497.001 21.2646 500.062 22.6582C501.592 23.355 502.77 23.9175 503.566 24.3053C503.964 24.4992 504.266 24.6495 504.468 24.7511L504.5 24.7674V390C504.5 406.292 491.292 419.5 475 419.5H33.366C33.3574 419.488 33.3485 419.475 33.3392 419.461C33.2239 419.293 33.0532 419.042 32.8321 418.712C32.3899 418.052 31.7466 417.076 30.9437 415.816C29.3378 413.295 27.0939 409.636 24.5445 405.087C19.4447 395.988 13.1268 383.336 8.24691 369.119C-1.52535 340.649 -5.47151 306.09 17.369 281.113C18.7475 279.606 20.064 277.995 21.2782 276.356C31.0321 263.187 46.4479 254.137 65.1887 247.389C83.927 240.642 105.933 236.217 128.813 232.258C135.002 231.188 141.255 230.151 147.525 229.112C164.415 226.312 181.417 223.494 197.571 219.94C219.723 215.066 240.331 208.797 256.939 199.261C273.866 189.542 281.074 177.133 283.602 163.136C285.869 150.586 284.369 136.759 282.825 122.521C282.654 120.94 282.481 119.354 282.314 117.764C280.634 101.817 279.404 85.4419 283.627 69.6279C287.843 53.8392 297.508 38.5707 317.704 24.8743Z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="main__content-block__col">
              </div>
              <div className="main__content-block__col">
              </div>
              <div className="main__content-block__col">
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WorkPage;
