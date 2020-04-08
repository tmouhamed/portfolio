import React, { Component } from 'react';
import './Hero.scss';
import SocialButton from '../SocialButton/SocialButton';

import Typist from 'react-typist';

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero__shape">
                    <svg className="hero__shape-filled" viewBox="0 0 665 861">
                        <path fill="#81D6E3" stroke="#81D6E3" strokeWidth="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
                    </svg>

                    <svg className="hero__shape-outline" viewBox="0 0 665 861">
                        <path fill="none" stroke="#81D6E3" strokeWidth="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
                    </svg>
                </div>

                <div className="hero__caption">
                    <Typist cursor={{ show: false }} className="hero__typist">
                        <h1 className="hero__typist-title">Hello <span className="hero__ttypist-mark">!</span><br /> My name is <span>Toqa</span></h1>
                        <Typist.Backspace count={15} delay={1000} />
                        <h1 className="hero__typist-title">I am a Web Developer</h1>
                    </Typist>
                    <div className="hero__subSection">
                        <p className="hero__subSection-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a className="hero__subSection-button" href="/"> More about me</a>
                    </div>
                </div >

                <SocialButton />
            </section >
        );
    }
}

export default Hero;
