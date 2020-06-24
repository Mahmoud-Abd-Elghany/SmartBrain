import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({submitHandler, changeHandler}) => {
    return(
        <div>
            <p className="f4 tc white">This app detects the face in the picture</p>
            <div className="flex center">
                <div className="pa3 br-5 shadow-5 wid">

                    <input type="text" className="f4 w-70 pa2 link" onChange={event => changeHandler(event.target.value)}/>

                    <button className="w-25 f4 grow link ph3 dib white bg-light-purple but ml3" 
                    onClick={submitHandler}>detect</button>
                    
                </div>
            </div>
            
        </div>
    )
    
}

export default ImageLinkForm;