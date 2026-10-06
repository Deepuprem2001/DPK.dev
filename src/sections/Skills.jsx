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

    // Repeat the skill list enough times that a single group is comfortably
    // wider than large viewports (up to ~1920px), so the loop never shows a gap.
    const MIN_ITEMS_PER_GROUP = 32;
    const repeatCount = Math.max(1, Math.ceil(MIN_ITEMS_PER_GROUP / skills.length));
    const groupItems = Array.from({ length: repeatCount }, () => skills).flat();

    const renderGroup = (groupKey, hidden) => (
        <div className="SkillsGroup" aria-hidden={hidden || undefined}>
            {groupItems.map((skill, index) => (
                <Label key={`${groupKey}-${index}`} logo={skill.logo} title={skill.title} />
            ))}
        </div>
    );

    return(

        <div className="SkillsSection">
            <p className="SkillsHeader">Skills</p>
            <div className="SkillsTrack">
                {renderGroup("a", false)}
                {renderGroup("b", true)}
            </div>
        </div>

    )
}

export default Skills;
