import React from "react";
import "./Image.css"


const Image = ({image}) => {
    return(
        <div className="flex center">
            <img className="ma2 imagewid" src={image} alt=""></img>
        </div>
    )
}

export default Image