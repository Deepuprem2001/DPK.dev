import React from "react";
import "../css/Projects.css"
import ProjectCards from "../component/ProjectCards";


function Projects(){

    return(
        
        <div className="ProjectSection">
            <p className="ProjectHeader">Recent Projects</p>
            <div className="ProjectList">
                <ProjectCards
                    projectPicture= "/KnowUrfoodMockup.png"
                    projectName="KnowUrFood"
                    projectDesc="I developed an Android Nutrition Tracking Application that leverages OCR and barcode scanning to make meal logging effortless. 
                    I built a layout-agnostic parser to extract structured nutrition data from unstructured text, 
                    integrated real-time charts, and ensured user-specific data synchronization. The app emphasizes a responsive, 
                    mobile-first design with optimized PWA performance." 
                    projectLink="https://github.com/Deepuprem2001/knowurfood"
                />
                <ProjectCards
                    projectPicture="/PortfolioMockup.png"
                    projectName="Personal Portfolio"
                    projectDesc="A personal developer portfolio built from scratch using React and Vite. Features smooth scroll animations, an infinite skills marquee, interactive 3D mouse-tracking, flip project cards, a timeline journey section, and a fully functional contact form powered by EmailJS. Fully responsive across all devices." 
                    projectLink="https://github.com/Deepuprem2001/DPK.dev"
                />
            </div>
        </div>

    )

}

export default Projects