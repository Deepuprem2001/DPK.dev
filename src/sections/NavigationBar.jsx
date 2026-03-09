import React, { useState } from "react";
import "../css/NavigationBar.css";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="TitleBar">
      <div className="TitleBarContent">
        <p className="WebsiteTitle" onClick={() => handleScroll("mainsection")}>
          Dpk<p className="GreenText">.dev</p>
        </p>

        {/* Desktop Nav */}
        <div className="NavigationButtons">
          <p className="NavLink" onClick={() => handleScroll("about")}>About Me</p>
          <p className="NavLink" onClick={() => handleScroll("experience")}>Experience</p>
          <p className="NavLink" onClick={() => handleScroll("skills")}>Skills</p>
          <p className="NavLink" onClick={() => handleScroll("projects")}>Projects</p>
          <p className="NavLink" onClick={() => handleScroll("journey")}>Journey</p>
          <p className="NavLink" onClick={() => handleScroll("contact")}>Contact</p>
        </div>

        {/* Hamburger Icon */}
        <div className="HamburgerIcon" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`HamburgerBar ${menuOpen ? "open" : ""}`}></span>
          <span className={`HamburgerBar ${menuOpen ? "open" : ""}`}></span>
          <span className={`HamburgerBar ${menuOpen ? "open" : ""}`}></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`MobileMenu ${menuOpen ? "show" : ""}`}>
        <p className="MobileNavLink" onClick={() => handleScroll("about")}>About Me</p>
        <p className="MobileNavLink" onClick={() => handleScroll("experience")}>Experience</p>
        <p className="MobileNavLink" onClick={() => handleScroll("skills")}>Skills</p>
        <p className="MobileNavLink" onClick={() => handleScroll("projects")}>Projects</p>
        <p className="MobileNavLink" onClick={() => handleScroll("journey")}>Journey</p>
        <p className="MobileNavLink" onClick={() => handleScroll("contact")}>Contact</p>
      </div>
    </div>
  );
}

export default NavigationBar;