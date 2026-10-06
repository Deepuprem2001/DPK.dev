import React from "react";
import "../css/Card.css"

const Card = ({title, subtitle, content}) => {

    return(

        <div className="Card">
            <div>
                {title && <p className="CardTitle">{title}</p>}
                {subtitle && <p className="CardSubtitle">{subtitle}</p>}
                <div className="CardContent">
                    {content}
                </div>
            </div>
        </div>

    );
}
    

export default Card