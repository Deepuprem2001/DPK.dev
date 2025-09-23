import React from "react";
import Label from "../component/Label";
import "../css/Skills.css"
import { FaAws, FaDatabase, FaDocker, FaFigma, FaGitAlt, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiAdobe, SiTensorflow, SiTypescript, SiVite } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

function Skills(){

    const skills = [
        { logo: <FaReact  />, title: "React.js" },
        { logo: <FaJs  />, title: "JavaScript" },
        { logo: <FaJava  />, title: "Java" },
        { logo: <SiTypescript  />, title: "TypeScript" },
        { logo: <FaPython  />, title: "Python" },
        { logo: <FaHtml5  />, title: "HTML & CSS" },
        { logo: <FaNodeJs   />, title: "Node.js" },
        { logo: <FaFigma  />, title: "Figma" },
        { logo: <SiAdobe  />, title: "Adobe" },
        { logo: <MdOutlineApi  />, title: "RestAPI" },
        { logo: <SiTensorflow  />, title: "Machine Learning & Algorithms" },
        { logo: <FaDatabase  />, title: "SQL" },
        { logo: <FaDocker  />, title: "Docker" },
        { logo: <FaAws  />, title: "AWS" },
        { logo: <FaGitAlt  />, title: "Git" },
        { logo: <GiMagnifyingGlass  />, title: "SEO" },
        { logo: <SiVite  />, title: "Vite" }
    ];

    return(

        <div className="SkillsSection">
            <p className="SkillsHeader">Skills</p>
            <div className="SkillsList">
                {skills.map((skill, index) => (
                    <Label key={index} logo={skill.logo} title={skill.title} />
                ))}
                {skills.map((skill, index) => (
                    <Label key={`dup-${index}`} logo={skill.logo} title={skill.title} />
                ))}
            </div>
        </div>

    )
}

export default Skills;
