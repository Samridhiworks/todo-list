import React from "react";
import brand1 from '../Assets/brand-1.webp'
import brand2 from '../Assets/brand-2.webp'
import brand3 from '../Assets/brand-3.webp'
import brand4 from '../Assets/brand-4.webp'
import brand5 from '../Assets/brand-5.webp'
            


const Brands =()=>{
    return(
        <>
        <div className="container-fluid my-5 pt-2">
            <div className="container d-flex justify-content-center align-items-center flex-wrap">
                <div className="heading-3 ">
           <h2 className="fw-bold display-5">SHOP OUR
            <br/> TOP BRANDS</h2>
            </div>
            <div className="all-brands ">
               <marquee>
                    <img src={brand1} alt=""/>
                    <img src={brand2} alt=""/>
                    <img src={brand3} alt=""/>
                    <img src={brand4} alt=""/>
                    <img src={brand5} alt=""/>
                    </marquee>
            </div>
            </div>
            <hr />
        </div>
     
        </>
    )
}

export default Brands