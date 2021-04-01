import React from 'react'

function PageSection(props) {
    return (
        <div className="Pagesection">
            <h2>{props.title}</h2>
            <div className={props.type}>
                <div>
                    {props.maintext}
                </div>
                {props.children}
            </div>
            
        </div>
    )
}

export default PageSection
