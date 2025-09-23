import React from "react";
import "../css/Card.css"

const Card = ({title, content}) => {

    return(

        <div className="Card">
            <div>
                {title && <p className="CardTitle">{title}</p>}
                <div className="CardContent">
                    {content}
                </div>
            </div>
        </div>

    );
}
    

export default Card