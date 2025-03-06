import React from "react";
import{useState,useEffect} from 'react'
import popimg from '../Assets/banner19.jpg'

const Popup = ()=>{
    const[isopen,setIsopen] = useState(false)

    useEffect(()=>{
      setIsopen(true)
    },[])
    return(
        <>
        {isopen ?(  
            
            <div className="container-fluid popup-bg" style={{height:"100vh"}}>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="">
                    <div className="popup-img mt-5">
                        <img src={popimg} alt="popupimage"/>
                        <button className="close" onClick={()=>{setIsopen(false)}}>X</button>
                    </div>
                </div>
            </div>
        </div>
    ):''}
      
        </>
    )
}



export default Popup;