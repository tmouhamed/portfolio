import React, { Component } from 'react';
import '../Work/Work.scss';

import Person from '../../assets/Toqa_Mouhamed.jpg'

class About extends Component {
    render() {
        return (
            <>
                <section className="content">
                    <div className="content__shape">
                        <svg className="content__shape-outline1 content__shape-blueShape" width="977" height="1080" viewBox="0 0 977 1080">
                            <path fill="#DAF8FF" d="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z"></path>
                        </svg>
                        <svg className="content__shape-outline2 content__shape-blueOutline" width="977" height="1164" viewBox="0 0 977 1164">
                            <path fill="none" stroke="#DAF8FF" strokeWidth="2" d="M399.544 38.4444C531.544 -48.0556 977.044 38.4444 977.044 38.4444V938.445C977.044 938.445 600.547 1132.86 366.544 1065.44C198.725 1017.1 36.8275 976.29 3.04443 804.945C-41.7432 577.785 421.472 680.14 483.044 456.944C527.364 296.29 267.544 124.944 399.544 38.4444Z"></path>
                        </svg>
                    </div>
                    <div className="content__caption">
                        <h1 className="content__caption-title">About me</h1>
                        <div className="content__caption-subSection">
                            <p className="content__caption-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <a className="content__caption-button" href="/"> More about me</a>
                        </div>
                    </div >
                </section>
            </>

        );
    }
}

export default About;
