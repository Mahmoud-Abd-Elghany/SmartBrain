import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = () => {
    return(
        <div>
            <p className="f4 tc white">This app detects the face in the picture</p>
            <div className="center">
                <div className="pa3 br-5 shadow-5 wid">
                    <input type="text" className="f4 w-70 pa2 link" />
                    <button className="w-25 f4 grow link ph3 dib white bg-light-purple flex-auto but ml3">detect</button>
                </div>
            </div>
            
        </div>
    )
    
}

export default ImageLinkForm;