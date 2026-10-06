import React from "react";
import "../css/Experience.css"
import Card from "../component/Card";

function Experience(){
    
    return(

        <div className="ExperienceSection">
            <p className="CardHeader">Experience</p>
            <div className="CardSection">
                <Card
                    title="Software Engineer (Internship)"
                    company="Tenacium DC"
                    date="May 2026 - Aug 2026, Remote"
                    items={[
                        "Built a full-stack application with Next.js, TypeScript, Python, FastAPI, PostgreSQL and Docker, with tested REST API endpoints and Playwright end-to-end tests.",
                        "Independently built a role-based access control system with Microsoft SSO and made the product fully mobile-responsive.",
                        "Deployed to AWS EC2 with Docker Compose and Nginx, and helped diagnose live production issues, including deployment failures and database migration conflicts, on a live CRM.",
                        "Led a knowledge-transfer session, wrote a handover report, and used AI-assisted development tools including Claude Code and MCP servers.",
                    ]}
                />
                <Card
                    title="Full Stack Engineer (Freelance)"
                    company="Food Pantry"
                    date="Nov 2025 - Apr 2026, Remote"
                    items={[
                        "Designed, built and delivered a full-stack e-commerce and inventory management system for food pantry organisations, working directly with the client from requirements to production.",
                        "Built a React and TypeScript frontend with a .NET Core backend, SQL Server, REST APIs, role-based access control and a modular component architecture.",
                        "Designed AI agents and Power Automate workflows to automate day-to-day business processes.",
                        "Applied DRY and SOLID principles, cutting estimated future development time by 20 percent, using Docker and Git throughout.",
                    ]}
                />
                <Card
                    title="Software Development Engineer"
                    company="Buddi AI"
                    date="Feb 2024 - Sep 2024"
                    items={[
                        "Improved frontend performance by 35 percent through component refactoring, lazy loading and Core Web Vitals improvements on a healthcare automation platform.",
                        "Led an accessibility overhaul to WCAG 2.1 AA.",
                        "Built reusable React and TypeScript components, and worked with Java, Spring Boot and REST APIs.",
                        "Wrote Cypress tests and improved on-page SEO with structured data.",
                    ]}
                />
                <Card
                    title="Frontend Developer"
                    company="LaserBeam Software"
                    date="Mar 2023 - Feb 2024"
                    items={[
                        "Cut frontend development time by 20 percent with a Figma-to-HTML pipeline using TeleportHQ.",
                        "Improved performance by 10 percent by introducing React into a legacy codebase and building a multi-theme UI system with Bootstrap and Kendo UI.",
                        "Designed an employee time-tracking tool from wireframe to production, using Balsamiq, Figma and Angular.",
                    ]}
                />
            </div>
            
        </div>

    )

}

export default Experience;