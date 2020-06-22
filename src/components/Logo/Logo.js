import React from "react";
import Tilt from "react-tilt"
import logo from './Logo.png';


const Logo = () => {
    return(
        <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 140, width: 140 }} >
            <div className="ma4 mt0 Tilt-inner shadow-5 w-auto"> <img src={logo} alt="Logo"/> </div>
        </Tilt>
    )
}

export default Logo