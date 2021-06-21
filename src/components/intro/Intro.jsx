import React from "react"
import "./intro.css"

function Intro(props){
    return(
        <div className="intro">
            <div className="intro-title">{props.introTitle}</div>
        </div>
    )
}

export default Intro;