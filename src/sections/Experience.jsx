import React from "react";
import "../css/Experience.css"
import Card from "../component/Card";

function Experience(){
    
    return(

        <div className="ExperienceSection">
            <p className="CardHeader">Experience</p>
            <div className="CardSection">
                <Card
                    title="Buddi AI"
                    content="Built full-stack web applications with React, TypeScript, JavaScript, and Java. 
                    Improved frontend performance by 35%, integrated REST APIs, and applied efficient data handling. 
                    Experienced with React Native, Vite, Hooks, Routers, Async Programming, Cypress, and boosted 
                    SEO discoverability through structured data and speed optimisation." 
                />
                <Card
                    title="LaserBeam Solutions"
                    content="Designed interactive UIs with Figma and Balsamiq, converting them into responsive HTML/CSS. 
                    Improved performance by 15% with React and enhanced UX. 
                    Built a real-time employee hours tracker using Angular, JavaScript, and data visualisation. 
                    Implemented multi-theme support with Bootstrap and Kendo UI for flexibility and customisation" 
                />
            </div>
            
        </div>

    )

}

export default Experience;