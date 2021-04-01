import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="project-body">
                {props.children}
                
                <div>
                    <div className="project-text">{props.text}</div>
                    <a href={props.naturelink}>view abstract</a>
                    <a href={props.link}>view dataset</a>
                </div>
            </div>
            
        </div>
    )
}

export default Project
