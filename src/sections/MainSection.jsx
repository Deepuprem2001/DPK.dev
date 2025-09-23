import React, { useState, useEffect } from "react";
import "../css/MainSection.css";
import { Typewriter } from "react-simple-typewriter";
import ThreeDMousePointer from "../component/ThreeDMousePointer";

function MainSection() {

    const icons = [
        "bi-code-slash",
        "bi-terminal",
        "bi-braces",
        "bi-cpu"
    ];

    const [currentIcon, setCurrentIcon] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => {
                setCurrentIcon((prev) => (prev + 1) % icons.length);
                setFade(true);
            }, 200);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="MainSection">
            <div className="Introduction">
                <p className="IntroductionContent">Hello I'm</p>
                <p className="IntroductionContent PrimaryText">Deepan Prashanth</p>
                <p className="AutoTypingContent">
                    <Typewriter
                        words={['Full-stack Web Developer','UI/UX Designer','Software Engineer']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={75}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>

                <div className="IntroductionButtons">
                    <a href="/DeepanPrashanthCV.pdf" download="DeepanPrashanthCV.pdf" className="PrimaryButton MarginRight">
                        <i className="bi bi-download"></i> Download CV
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/deepan-prashanth-prem-kumar" 
                        target="_blank" 
                        rel="noreferrer"
                        className="SecondaryButton MarginRight"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a 
                        href="https://github.com/Deepuprem2001" 
                        target="_blank" 
                        rel="noreferrer"
                        className="SecondaryButton MarginRight"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>

            <div className="IntroductionImageSection">
                <div className="ImageSection">
                    <ThreeDMousePointer>
                        <i className={`bi ${icons[currentIcon]} ImagePlacement`} style={{opacity: fade ? 1:0, transition: "opacity 0.2s ease-in-out"}}></i>
                    </ThreeDMousePointer>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
