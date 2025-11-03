import React from "react";
import { ReactTyped } from "react-typed";
import cigarette from '../assets/cigarette.png'
import chirag from '../assets/chirag1.png'
function Header(){
    return(
        <div className="header">
            <div className="HeaderImg">
                <img src={cigarette} alt="" />
            </div>
            <div className="headerContent">
                <img src={chirag} alt="" />
                <h1>&lt; <ReactTyped strings={["Chirag","Software Developer","Full Stack Web Developer"]} typeSpeed={100} backSpeed={50} loop/>&gt;</h1>
            </div>
            <div className="HeaderImg">
                <img src={cigarette} alt="" />
            </div>
        </div>
    )
}

export default Header
