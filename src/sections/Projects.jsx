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
                    projectLive="https://deepuprem2001.github.io/knowurfood/"
                />
                <ProjectCards
                    projectPicture="/BudgetOSMockup.png"
                    projectName="Budget OS"
                    projectDesc="A full-stack personal finance platform built with React, Supabase and Tailwind CSS. Track spending, manage budgets, monitor debts, set financial goals and get personalised smart insights — all in one place." 
                    projectLink="https://github.com/Deepuprem2001/budget-os"
                    projectLive="https://budget-os.vercel.app/"
                />
            </div>
        </div>

    )

}

export default Projects