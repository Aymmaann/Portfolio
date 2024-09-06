import React from "react";
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

const Contact = () => {
    return(
        <>
            <section className="contact-section" id="Contact">
                <div className="contact-text-section">
                    <h2>Contact Me</h2>
                    <p>I'm excited to hear from you! Feel free to use the form below to share your thoughts, project ideas, or discuss potential collaborations.</p>
                    <div className="social-icons">
                        <a href="https://github.com/Aymmaann" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ayman-haseeb-4281a1251/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/_aymaaaaan___/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://medium.com/@aymanhaseeb8121" target="_blank">
                            <i className="fa-brands fa-medium"></i>
                        </a>
                    </div>
                </div>

                <div className="form-section">
                    <form action="">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email Address"/>
                        <textarea type="text" placeholder="Message"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;