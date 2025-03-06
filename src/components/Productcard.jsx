import React,{useRef} from "react";
import data from '../Assets/data';
import { useDispatch } from "react-redux";
import {add,remove} from '../Store/Store'

const Productcard = () => {
  const galleryRef = useRef(null)
  const dispatch =useDispatch()
  

  const scrollRight=()=>{
    if(galleryRef.current) {
      galleryRef.current.scrollLeft += 400
    }
  }

  const scrollLeft = () =>{
    if(galleryRef.current){
      galleryRef.current.scrollLeft -=400
    }
  }
  return (
    <>
    <div className="container-fluid shops2 mt-5  ">
      <div className="container d-flex flex-column">
        <div className="shop-heading2 text-center mb-4">
          <h2 className="fw-bold">NEW ARRIVALS</h2>
        </div>
        
        <div className="rows  d-flex ">
        <div className="icon-backward d-flex align-items-center  "  >
        <i class="fa-solid fa-angle-left" onClick={scrollLeft} ></i>
        </div>
        <div className="gallery  d-flex mb-5 pb-2" ref={galleryRef}>
          {data.map((item) => (
            <div className="all-products" key={item.id}>
              <div className="card h-100 shadow pro-img border-0">
                <img className="card-img-top " src={item.image} alt={item.name} />
                <div className="card-body text-center">
                  <p className="card-title">{item.name}</p>
                  <p className="card-text fw-bold text-danger">${item.new_price}</p>
                  <button className="bg-black border-0 rounded-4 py-2 px-4 text-white shadow " onClick={(e)=>{dispatch(add(item))}}>ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="icon-forward d-flex align-items-center"  >
          <i class="fa-solid fa-angle-left" onClick={scrollRight}></i>
          </div>
        </div>

      </div>
    </div>

   </>
  );
};


  


export default Productcard;
