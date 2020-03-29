import React, { Component } from 'react';
import './PageShape.scss';

class PageShape extends Component {
    render() {
        return (
            <div className="hero__shape">
                <svg className="hero__shape-filled" viewBox="0 0 665 861">
                    <path fill="#DEE2FF" stroke="#DEE2FF" strokeWidth="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
                </svg>

                <svg className="hero__shape-outline" viewBox="0 0 665 861">
                    <path fill="none" stroke="#DEE2FF" strokeWidth="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
                </svg>
            </div>
        );
    }
}

export default PageShape;
