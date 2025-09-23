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
            <p>Launched my portfolio and worked on major React projects.</p>
          </div>
          <div className="YearCard right">
            <h2>2024</h2>
            <p>Completed internship and started learning full-stack development.</p>
          </div>
          <div className="YearCard left">
            <h2>2023</h2>
            <p>Started university and worked on multiple small projects.</p>
          </div>
          <div className="YearCard right">
            <h2>2022</h2>
            <p>Got into coding and built my first mini-projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey;
