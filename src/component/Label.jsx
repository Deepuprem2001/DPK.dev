import React from "react";
import "../css/Label.css"

const Label=({logo, title}) => {

    return(

        <div className="Label">
            {logo && <p className="SkillLogo">{logo}</p>}
            <p className="SkillContent">{title}</p>
        </div>

    );

}

export default Label