import React from "react";

function Contact() {
    return (
        <div className="contact">
            <h1>Get In Touch</h1>
            <p>Want to Chat? Send me an E-mail through this button and I'll respond whenever I can.</p>
            <button onClick={() => {window.location.href = "mailto:ilyas.chirag@gmail.com";}}>Contact Me</button>

        </div>
    )
}

export default Contact