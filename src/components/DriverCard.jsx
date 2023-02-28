import React from "react";
import Rating from "./Rating.jsx"


function DriverCard(props) {
    const { name, rating, img, car } = props;

    return (
        <div className='pilots-cards'>
            <img className="pilot-img" src={img} alt="Foto piloto" />
            <div className='License-card'>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )

}
export default DriverCard
