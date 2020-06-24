import React from "react";
import "./Navigation.css"
import Logo from "../Logo/Logo";


const Navigation = () => {
    return(
        <nav className="flex flex-column ">
            <Logo className="self-start"/>
            <p className="f3 link dim black underline pa3 pointer white self-end">Sign Out</p>

        </nav>
    )
}

export default Navigation;