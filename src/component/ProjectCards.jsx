import React, { useState } from "react";
import "../css/ProjectCards.css"

const ProjectCards = ({projectPicture, projectName, projectDesc, projectLink}) => {

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
                                alt={projectName}
                            />
                        )}
                    </div>
                    <div className="ProjectName">
                        <p>{projectName}</p>
                    </div>
                </div>

                <div className="ProjectCardBack">
                    <h3>{projectName}</h3>
                    <p>{projectDesc}</p>
                    {projectLink && (
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ProjectLink"
                                onClick={(e) => e.stopPropagation()} 
                            >
                                View Project
                            </a>
                        )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCards