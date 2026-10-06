import React from "react";
import "../css/AboutMe.css"

function AboutMe(){

    return(

        <div className="AboutMeSection">
            <div className="AboutMeContent">
                <p className="AboutMeTitle">About Me</p>
                Software engineer with a Distinction in MSc Advanced Computer Science from the University of Liverpool, building
                full-stack products across React, Next.js, Python and .NET. At Tenacium DC I built a role-based access control
                system with Microsoft SSO and helped run a live production CRM on AWS, and as a freelance engineer I delivered a
                full-stack e-commerce platform while designing AI agents and automation workflows for a client&apos;s day-to-day
                operations. I care about performance and accessibility, having improved Core Web Vitals and led a WCAG 2.1 AA
                accessibility overhaul earlier in my career, and I enjoy using AI-assisted development tools to ship faster without
                cutting corners.
            </div>  
        </div>

    )
}

export default AboutMe;