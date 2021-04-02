import React from 'react';
import fulllogo from '../img/fulllogo.png';

function Footer() {
    return (
        <div>
            <div className="Footer">
                <img src={fulllogo} alt="biohub-logo"></img>
                <span>
                    <a>mission</a>
                    <a>projects</a>
                    <a>biohub</a>
                </span>
            </div>
        </div>
    )
}

export default Footer
