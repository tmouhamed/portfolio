import React, { Component } from 'react';
import { Power1, Expo, TimelineLite } from "gsap";
import './SocialButton.scss';

class SocialButton extends Component {

    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = new TimelineLite({ paused: true });
    }

    mouseOver = (e) => {
        // use the node ref to create the animation
        e.stopPropagation();
        this.myTween.timeScale(1.6);
        this.myTween
            .to('.cube', 0.4, { rotation: 45, width: '120px', height: '120px', ease: Expo.easeOut }, 'first')
            .to('.plus .plus-horizontal', 0.3, { width: '0', backgroundColor: '#f45c41', ease: Power1.easeIn }, 'first')
            .to('.cube', 0, { backgroundColor: 'transparent' })
            .to('.quadrant__item1', 0.15, { x: -5, y: -5 }, 'seperate')
            .to('.arrow-up', 0.2, { opacity: 1, y: 0 }, 'seperate+=0.2')
            .to('.quadrant__item2', 0.15, { x: 5, y: -5 }, 'seperate')
            .to('.arrow-right', 0.2, { opacity: 1, x: 0 }, 'seperate+=0.2')
            .to('.quadrant__item3', 0.15, { x: 5, y: 5 }, 'seperate')
            .to('.arrow-down', 0.2, { opacity: 1, y: 0 }, 'seperate+=0.2')
            .to('.quadrant__item4', 0.15, { x: -5, y: 5 }, 'seperate')
            .to('.arrow-left', 0.2, { opacity: 1, x: 0 }, 'seperate+=0.2')
            .play();
    }

    mouseLeave = (e) => {
        e.stopPropagation();
        this.myTween.timeScale(1.8)
            .reverse();
    }

    render() {
        return <div className="container" ref={cube => this.myElement = cube} onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
            <div className="cube">
                <div className="plus">
                    <div className="plus-horizontal"></div>
                    <div className="plus-vertical"></div>
                </div>
                <div className="quadrant">
                    <div className="quadrant__item quadrant__item1">
                        <div className="quadrant__item__content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="arrow-up">
                                <a href="https://www.linkedin.com/in/toqa-mouhamed/" target="_blank" rel="noopener noreferrer" cursor="pointer">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#fff" />
                                </a>
                            </svg>
                        </div>
                    </div>
                    <div className="quadrant__item quadrant__item2">
                        <div className="quadrant__item__content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="arrow-right">
                                <a href="https://github.com/tmouhamed" target="_blank" rel="noopener noreferrer" cursor="pointer">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" fill="#fff" />
                                </a>
                            </svg>
                        </div>
                    </div>
                    <div className="quadrant__item quadrant__item3">
                        <div className="quadrant__item__content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="arrow-down">
                                <a href="https://drive.google.com/file/d/15Eg0nnUtYJj8d0T6y1SHbT9enWDcoM4G/view?usp=sharing" target="_blank" rel="noopener noreferrer" cursor="pointer">
                                    <path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm-7.816-2h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm13 3.975v2.568c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm4-6.475c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.992-.941-.696.697 1.688 1.637 2.812-2.866z" fill="#fff" />
                                </a>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >






        // <div>
        //     <ul>
        //         {elementsArray.map((element, index) => <li
        //             key={element.id}
        //             ref={li => this.myElements[index] = li}
        //         >
        //             {element.name}
        //         </li>)}
        //     </ul>
        // </div>;
    }
}

export default SocialButton;
