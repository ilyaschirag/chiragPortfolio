import React from "react";
import { ReactTyped } from "react-typed";
import linkedin from '../assets/linkedinLogo.png'
import github from '../assets/githubLogo.png'
import pdf from '../assets/pdf.png'
import resume from '../assets/chiragResume.pdf'

function Navbar(){
    return(
        <div className="navbar">

            <div className="navbar-title">
                <a href="">&lt; <ReactTyped strings={["codewithsutta "]} typeSpeed={100} /> &gt;</a>
            </div>
            <div className="navbar-options">
                <a href="">Tech</a>
                <a href="">Projects</a>
                <a href="">Certification</a>
                <a href="">Contact</a>
            </div>

            <div className="navbar-links">
                <a href="https://www.linkedin.com/in/chirag-goyal-26b752364/" target="_blank"><img src={linkedin} alt="" /></a>
                <a href="https://github.com/ilyaschirag"  target="_blank"><img src={github} alt=""/></a>
                <a href={resume} target="_blank"><img src={pdf} alt="" /></a>
            </div>
        </div>
    )
}

export default Navbar