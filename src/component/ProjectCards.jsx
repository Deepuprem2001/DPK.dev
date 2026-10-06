import React, { useState } from "react";
import "../css/ProjectCards.css"

const ProjectCards = ({projectPicture, projectName, problem, role, features, stack, outcome, projectLink, projectLive}) => {

    const [flipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!flipped);
    }

    return(

        <div className="ProjectCard" onClick={handleFlip}>
            <div className={`ProjectCardInner ${flipped ? "flipped" : ""}`}>
                <div className="ProjectCardFront">
                    <div className="ProjectPic">
                        {projectPicture && (
                            <img
                                className="ProjectImage"
                                src={projectPicture}
                                alt={`${projectName} project screenshot`}
                            />
                        )}
                    </div>
                    <div className="ProjectName">
                        <p>{projectName}</p>
                    </div>
                </div>

                <div className="ProjectCardBack">
                    <h3>{projectName}</h3>
                    <div className="ProjectCaseStudy">
                        {problem && <p><strong>Problem:</strong> {problem}</p>}
                        {role && <p><strong>Role:</strong> {role}</p>}
                        {features && <p><strong>Key features:</strong> {features}</p>}
                        {stack && <p><strong>Stack:</strong> {stack}</p>}
                        {outcome && <p><strong>Outcome:</strong> {outcome}</p>}
                    </div>
                    <div className="ButtonSection">
                    {projectLink && (
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ProjectLink"
                                onClick={(e) => e.stopPropagation()} 
                            >
                                View Code Base
                            </a>
                        )}
                    {projectLive && (
                        <a 
                            href={projectLive}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ProjectLive"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View Project
                        </a>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCards