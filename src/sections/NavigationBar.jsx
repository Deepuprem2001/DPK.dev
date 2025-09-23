import React from "react";
import "../css/NavigationBar.css";

function NavigationBar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="TitleBar">
        <div className="TitleBarContent">
            <p className="WebsiteTitle" onClick={() => handleScroll("mainsection")}>Dpk<p className="GreenText">.dev</p></p>
            <div className="NavigationButtons">
                <p className="NavLink" onClick={() => handleScroll("about")}>About Me</p>
                <p className="NavLink" onClick={() => handleScroll("experience")}>Experience</p>
                <p className="NavLink" onClick={() => handleScroll("skills")}>Skills</p>
                <p className="NavLink" onClick={() => handleScroll("projects")}>Projects</p>
                <p className="NavLink" onClick={() => handleScroll("journey")}>Journey</p>
                <p className="NavLink" onClick={() => handleScroll("contact")}>Contact</p>
            </div>
        </div>
    </div>
  );
}

export default NavigationBar;
