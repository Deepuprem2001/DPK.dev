import React from "react";
import Label from "../component/Label";
import "../css/Skills.css"
import { FaAws, FaDatabase, FaDocker, FaFigma, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiDotnet, SiFastapi, SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { MdOutlineApi, MdOutlineAccessibility } from "react-icons/md";
import { TbRobot } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

function Skills(){

    const skillGroups = [
        {
            category: "Frontend",
            skills: [
                { logo: <FaReact />, title: "React" },
                { logo: <SiNextdotjs />, title: "Next.js" },
                { logo: <SiTypescript />, title: "TypeScript" },
                { logo: <FaJs />, title: "JavaScript" },
                { logo: <FaHtml5 />, title: "HTML & CSS" },
            ],
        },
        {
            category: "Backend and Data",
            skills: [
                { logo: <FaPython />, title: "Python" },
                { logo: <SiFastapi />, title: "FastAPI" },
                { logo: <SiDotnet />, title: ".NET" },
                { logo: <FaDatabase />, title: "SQL" },
                { logo: <SiPostgresql />, title: "PostgreSQL" },
                { logo: <MdOutlineApi />, title: "REST APIs" },
            ],
        },
        {
            category: "Cloud and DevOps",
            skills: [
                { logo: <FaAws />, title: "AWS" },
                { logo: <FaDocker />, title: "Docker" },
                { logo: <FaGitAlt />, title: "Git" },
                { logo: <VscAzureDevops />, title: "Power Automate" },
            ],
        },
        {
            category: "AI and Automation",
            skills: [
                { logo: <TbRobot />, title: "AI Agents & LLM Tooling" },
            ],
        },
        {
            category: "Testing and Quality",
            skills: [
                { logo: <FaNodeJs />, title: "Playwright" },
                { logo: <FaNodeJs />, title: "Vitest" },
                { logo: <MdOutlineAccessibility />, title: "Accessibility (WCAG 2.1 AA)" },
                { logo: <FaFigma />, title: "Figma" },
            ],
        },
    ];

    const skills = skillGroups.flatMap((group) => group.skills);

    return(

        <div className="SkillsSection">
            <p className="SkillsHeader">Skills</p>
            <div className="SkillsList">
                {skills.map((skill, index) => (
                    <Label key={index} logo={skill.logo} title={skill.title} />
                ))}
                <div aria-hidden="true" className="SkillsDuplicateSet">
                    {skills.map((skill, index) => (
                        <Label key={`dup-${index}`} logo={skill.logo} title={skill.title} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Skills;
