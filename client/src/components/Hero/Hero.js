import React, { Component } from 'react';
import './Hero.scss';
import PageShape from '../PageShape/PageShape';

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <PageShape />
            </section>
        );
    }
}

export default Hero;
