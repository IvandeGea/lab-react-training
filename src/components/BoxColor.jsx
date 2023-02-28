import React from "react";


function BoxColor(props) {
    const { r, g, b } = props;

    const color = {
        backgroundColor: `rgb(${r},${g},${b})`
    }


    return (
        <div className="boxColor" style={color}>
            <p > rgb({r},{g},{b}) </p>
        </div>
    )

}
export default BoxColor

