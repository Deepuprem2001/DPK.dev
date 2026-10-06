import React, { useEffect } from "react";
import "../css/Journey.css";

const journeyData = [
  {
    year: "2026",
    milestones: [
      {
        title: "Completed internship at Tenacium DC",
        month: "May to Aug",
        description: "Software engineer building a full-stack app, access control with Microsoft SSO, AWS deployment.",
      },
      {
        title: "Completed freelance project for Food Pantry",
        month: "Apr",
        description: "E-commerce and inventory system with AI agents.",
      },
      {
        title: "Shipped BudgetOS",
        month: "Jan to Mar",
        description: "Full-stack finance platform, live on Vercel.",
      },
    ],
  },
  {
    year: "2025",
    milestones: [
      {
        title: "Started freelance project for Food Pantry",
        month: "Nov",
        description: "Began building a full-stack e-commerce and inventory system.",
      },
      {
        title: "Graduated MSc Advanced Computer Science with Distinction",
        month: "Sep",
        description: "University of Liverpool.",
      },
      {
        title: "Built KnowUrFood",
        month: "Jun to Sep",
        description: "MSc dissertation app with an AI agent.",
      },
    ],
  },
  {
    year: "2024",
    milestones: [
      {
        title: "Started MSc at the University of Liverpool",
        month: "Sep",
        description: "Began studying Advanced Computer Science.",
      },
      {
        title: "Joined Buddi AI as Software Development Engineer",
        month: "Feb",
        description: "35% frontend performance gain, WCAG 2.1 AA accessibility.",
      },
    ],
  },
  {
    year: "2023",
    milestones: [
      {
        title: "Graduated BTech with First Class Distinction",
        description: "SRM University.",
      },
      {
        title: "Joined LaserBeam Software as Frontend Developer",
        month: "Mar",
        description: "Began building business-critical web apps.",
      },
    ],
  },
  {
    year: "2019",
    milestones: [
      {
        title: "Began BTech in Electronics and Computer Engineering",
        description: "SRM University, India.",
      },
    ],
  },
];

const flatMilestones = journeyData.flatMap((group) =>
  group.milestones.map((milestone) => ({ ...milestone, year: group.year }))
);

function Journey() {

  useEffect(() => {
    const cards = document.querySelectorAll(".MilestoneCard");

    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.8;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", revealSection);
    revealSection();

    return () => window.removeEventListener("scroll", revealSection);
  }, []);

  let lastYear = null;

  return (
    <div className="MyJourney">
      <div className="JourneyHeader">My Journey</div>
      <div className="JourneySection">
        <div className="ScrollProgression"></div>
        <div className="JourneyContent">

          {flatMilestones.map((milestone, index) => {
            const showYear = milestone.year !== lastYear;
            lastYear = milestone.year;
            const side = index % 2 === 0 ? "left" : "right";

            return (
              <React.Fragment key={`${milestone.year}-${index}`}>
                {showYear && (
                  <div className="YearMarker">
                    <span>{milestone.year}</span>
                  </div>
                )}
                <div className={`MilestoneCard ${side}`}>
                  <h3>{milestone.title}</h3>
                  {milestone.month && <span className="MilestoneMonth">{milestone.month}</span>}
                  <p>{milestone.description}</p>
                </div>
              </React.Fragment>
            );
          })}

        </div>
      </div>
    </div>
  )
}

export default Journey;
