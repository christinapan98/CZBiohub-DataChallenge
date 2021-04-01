import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div>
            <div className="project-body">
                {props.children} 
                {/* contains the image */}

                <div className="project-desc">
                    <h2>{props.title}</h2>
                    <div className="project-text">{props.text}</div>
                    <a href={props.naturelink} target="blank">view abstract</a>
                    <a href={props.link} target="blank">view dataset</a>
                </div>
            </div>
            
        </div>
    )
}

export default Project
