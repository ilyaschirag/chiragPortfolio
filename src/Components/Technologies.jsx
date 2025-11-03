import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import express from '../assets/express.png'
import postman from '../assets/postman.png'
import react from '../assets/react.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
function Technologies(){
    return(
        <div className="technology">
            <div className="techHeading">
                <h1>Technologies</h1>
            </div>
            <div className="techImages">
                <div>
                     <img src={html} alt="" />
                </div>
                <div>
                    <img src={css} alt="" />
                </div>
                <div>
                    <img src={js} alt="" />
                </div>
                <div>
                    <img src={express} alt="" />
                </div>
                <div>
                    <img src={react} alt="" />
                </div>
                <div>
                    <img src={postman} alt="" />
                </div>
                <div>
                    <img src={c} alt="" />
                </div>
                <div>
                    <img src={cpp} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technologies