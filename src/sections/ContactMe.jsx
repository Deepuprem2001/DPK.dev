import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../css/ContactMe.css";

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",   
                "YOUR_TEMPLATE_ID",  
                form.current,
                "YOUR_PUBLIC_KEY"    
            )
            .then(
                (result) => {
                    alert("✅ Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send message, please try again.");
                    console.error(error.text);
                }
            );
    };

    return (
        <div className="ContactMe">
            <div className="ContactMeHeader">Let's Connect</div>

            <p className="ContactMeIntro">
                I'd love to hear from you! Whether it's a project, job opportunity, or just a chat —
                feel free to reach out.
            </p>

            <div className="ContactMeSection">
                <form ref={form} onSubmit={sendEmail} className="ContactForm">
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="ContactSocials">
                    <a href="mailto:deepanprashanthp@gmail.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/deepan-prashanth-prem-kumar" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/Deepuprem2001" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
