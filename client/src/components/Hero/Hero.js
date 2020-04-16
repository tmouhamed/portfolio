import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typist from 'react-typist';

import SocialButton from '../SocialButton/SocialButton';

import './Hero.scss';


class Hero extends Component {
    render() {
        const { props, fill, stroke, path, shapeClass, outlineClass, filledViewbox, outlineViewbox, heroClass, captionClass } = this.props;
        return (
            <section className={heroClass}>
                <div className="hero__shape">
                    <svg className={shapeClass} viewBox={filledViewbox}>
                        {stroke ? <path fill="none" stroke={stroke} strokeWidth="2" d={path} /> : <path fill={fill} d={path} />}
                    </svg>

                    <svg className={outlineClass} viewBox={outlineViewbox}>
                        <path fill="none" stroke={fill} strokeWidth="2" d={path} />
                    </svg>
                </div>
                <div className="hero__row">
                    <div className={captionClass}>
                        {props.match.url === '/' ?
                            <Typist cursor={{ show: false }} className="hero__typist">
                                <h1 className="hero__typist-title">Hello <span className="hero__ttypist-mark">!</span><br /> My name is <span>Toqa</span></h1>
                                <Typist.Backspace count={15} delay={1000} />
                                <h1 className="hero__typist-title">I am a Web Developer</h1>
                            </Typist>
                            :
                            <Typist cursor={{ show: false }} className="hero__typist">
                                <h1 className="hero__typist-title">About me !</h1>
                            </Typist>
                        }

                        {props.info.map(info => {
                            return (
                                <div className="hero__subSection" key={uuidv4()}>
                                    <p className="hero__subSection-description">{info.description}</p>
                                    <a className="hero__subSection-button" href={info.link}> {info.button}</a>
                                </div>
                            )
                        })}
                        {props.match.url === '/' ? <SocialButton /> : null}
                    </div >
                </div>
            </section>
        );
    }
}

export default Hero;
