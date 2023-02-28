import React from "react";


function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;
    return (

        <div className="idCard">

            <img src={picture} alt="" />
            <div className="id">
                <p className="lastname"><b>Last name: </b>{lastName}</p>
                <p className="firstname"><b>First name: </b> {firstName}</p>
                <p className="gender"><b>Gender: </b>{gender}</p>
                <p className="height"><b>Height: </b> {height}</p>

                <p className="birth"><b>Birth: </b> {birth.toLocaleString()}</p>
            </div>
        </div>

    );
}

export default IdCard;


