import React, { Component } from 'react';
import './Hero.scss';
import PageShape from '../PageShape/PageShape';

import Typist from 'react-typist';

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <PageShape />

                <div class="hero__caption">
                    <Typist cursor={{ show: false }} className="hero__typist">
                        <h1 className="hero__typist-title">Hello,<br /> my name is <span>Toqa</span></h1>
                        <Typist.Backspace count={15} delay={200} />
                        <h1 className="hero__typist-title">I am a Web Developer</h1>
                    </Typist>
                    <div className="hero__subSection">
                        <p className="hero__subSection-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="/" className="hero__subSection-button">A little about me</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
