import React, { Component } from 'react';
import './Hero.scss';
import PageShape from '../PageShape/PageShape';

import Typist from 'react-typist';

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <PageShape />

                <div className="hero__caption">
                    <Typist cursor={{ show: false }} className="hero__typist">
                        <h1 className="hero__typist-title">Hello <span className="hero__typist-mark">!</span><br /> My name is <span>Toqa</span></h1>
                        <Typist.Backspace count={15} delay={1000} />
                        <h1 className="hero__typist-title">I am a Web Developer</h1>
                    </Typist>
                    <div className="hero__subSection">
                        <p className="hero__subSection-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a className="hero__subSection-button" href="/"> More about me</a>
                    </div>
                </div >
            </section >
        );
    }
}

export default Hero;
