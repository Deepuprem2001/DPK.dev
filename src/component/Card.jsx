import React from "react";
import "../css/Card.css"

const Card = ({title, company, date, items}) => {

    return(

        <div className="Card">
            <div className="CardBody">
                {title && <p className="CardTitle">{title}</p>}
                {company && <p className="CardCompany">{company}</p>}
                {date && <span className="CardDateChip">{date}</span>}
                {items && items.length > 0 && (
                    <ul className="CardList">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    );
}
    

export default Card