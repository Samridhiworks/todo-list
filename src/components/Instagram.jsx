import React from "react";
import gallery from "../Assets/Gallery";


const Instagram = ()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h2 className="fw-bold">FOLLOW US ON INSTAGRAM</h2>
                <p className="fw-bold text-danger ">#BROOKLYNK</p>
            </div>
            </div>
            <div className="image-caraousel d-flex">
                {gallery.map((item)=>(
                    <div className="g-image" key={item.id}>
                     
                        <img src={item.thumbanil} />
                       
                        <button className="g-button fw-bold">{item.text}</button>
                      
                    </div>
                ))}
            
        </div>
        </>
    )
}

export default Instagram