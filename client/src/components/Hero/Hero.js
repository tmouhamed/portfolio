import React, { Component } from 'react';
import './Hero.scss';
import PageShape from '../PageShape/PageShape';

import Typist from 'react-typist';

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <PageShape />
                <Typist className="hero__typist">
                    <div class="hero__caption">
                        <h1 className="hero__title">Hello,<br /> my name is <span>Toqa</span></h1>
                        <p className="hero__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="/" className="hero__button">A little about me</a>
                    </div>
                </Typist>

            </section>
        );
    }
}

export default Hero;
