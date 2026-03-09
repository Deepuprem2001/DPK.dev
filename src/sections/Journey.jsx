import React, { useEffect } from "react";
import "../css/Journey.css";

function Journey() {

  useEffect(() => {
    const sections = document.querySelectorAll(".YearCard");
    
    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.8;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", revealSection);
    revealSection();

    return () => window.removeEventListener("scroll", revealSection);
  }, []);

  return (
    <div className="MyJourney">
      <div className="JourneyHeader">My Journey</div>
      <div className="JourneySection">
        <div className="ScrollProgression"></div>
        <div className="JourneyContent">

          <div className="YearCard left">
            <h2>2025</h2>
            <p>Graduated with Distinction in MSc Advanced Computer Science from the University of Liverpool. Launched my portfolio and continued building full-stack projects.</p>
          </div>

          <div className="YearCard right">
            <h2>2024</h2>
            <p>Joined Buddi AI as a Software Engineer, delivering full-stack features for healthcare automation platforms using React, TypeScript, and Java. Improved frontend performance by 35%. Started MSc at University of Liverpool in Sept 2024.</p>
          </div>

          <div className="YearCard left">
            <h2>2023</h2>
            <p>Joined Laserbeam Solutions as a Front End Developer, building business-critical web apps with React, JavaScript, and CSS. Graduated from SRM University with a BTech in Electronics & Computer Engineering with First Class Distinction.</p>
          </div>

          <div className="YearCard right">
            <h2>2019</h2>
            <p>Began BTech in Electronics & Computer Engineering at SRM University, India. Started exploring programming and laid the foundation in computer science fundamentals.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Journey;