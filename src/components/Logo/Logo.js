import React from "react";
import Tilt from "react-tilt"
import logo from './Logo.png';


const Logo = () => {
    return(
        <Tilt className="Tilt ma2" options={{ max : 35 }} style={{ height: 10, width: 80 }} >
            <div className="pa2 mt2 Tilt-inner shadow-5 flex center"> <img src={logo} alt="Logo"/> </div>
        </Tilt>
    )
}

export default Logo