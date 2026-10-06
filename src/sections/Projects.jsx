import React from "react";
import "../css/Projects.css"
import ProjectCards from "../component/ProjectCards";


function Projects(){

    return(
        
        <div className="ProjectSection">
            <p className="ProjectHeader">Recent Projects</p>
            <div className="ProjectList">
                <ProjectCards
                    projectPicture="/BudgetOSMockup.png"
                    projectName="BudgetOS"
                    problem="People need one place to track spending, budgets, debts and goals instead of juggling spreadsheets."
                    role="Solo build, end to end, from design to deployment."
                    features="A weighted financial health score across 5 factors, 12 personalised insights generated from spending data, 7 interactive analytics charts, recurring transactions, goals and debt payoff estimates, net worth tracking, CSV and PDF export, and 6 themes with dark and light mode. Covered by 30 Vitest tests."
                    stack="React, Vite, TypeScript, Tailwind CSS v4, Zustand, Supabase (PostgreSQL with 11 tables and row-level security), Recharts, Framer Motion, deployed on Vercel."
                    outcome="Chose React with Supabase over a heavier .NET backend to keep a solo build lean and ship faster."
                    projectLink="https://github.com/Deepuprem2001/budget-os"
                    projectLive="https://budget-os.vercel.app/"
                />
                <ProjectCards
                    projectPicture="/KnowUrfoodMockup.png"
                    projectName="KnowUrFood"
                    problem="Meal logging is tedious, and OCR-only nutrition apps are slow and error-prone in low light or on curved packaging."
                    role="Solo build for my MSc dissertation at the University of Liverpool."
                    features="Barcode scanning via the OpenFoodFacts API as the default input method, with OCR through Tesseract.js as a fallback. Charts for calories and nutrients, BMR-based goals, gamification with XP, streaks and badges, an AI agent for personalised nutrition suggestions, and offline support."
                    stack="React Native, Firebase, SQLite, IndexedDB, Chart.js."
                    outcome="Switched OCR from the default to a fallback after real-world testing showed barcode scanning was faster and more reliable."
                    projectLink="https://github.com/Deepuprem2001/knowurfood"
                    projectLive="https://deepuprem2001.github.io/knowurfood/"
                />
                <ProjectCards
                    projectName="Medical Coding Web Application"
                    problem="Manually extracting relevant clinical terms from free-text notes is slow and inconsistent."
                    role="Built at Buddi AI, working on the frontend and contributing to the backend."
                    features="A React interface backed by a modular Java backend, with NLP-based keyword extraction from clinical text to speed up the coding workflow."
                    stack="React, Java, REST APIs, NLP keyword extraction."
                    outcome="Delivered a working tool that sped up keyword extraction from clinical text as part of Buddi AI's healthcare automation platform."
                />
            </div>
        </div>

    )

}

export default Projects