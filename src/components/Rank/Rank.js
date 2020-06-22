import React from "react"

const Rank = () => {
    return(
        <div className= "tc" >
            <p className=" f2 white ma0">{'Maz, your rank is...'}</p>
            <div className=" f1 white ma0 flex center">
             <p>{'#'}</p>
             <p className="grow">{'3'}</p>
            </div>
            
        </div>
    )
}

export default Rank;