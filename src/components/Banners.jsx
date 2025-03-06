import React from "react";
import banner1 from "../Assets/sub-banner.jpg";
import banner2 from '../Assets/sub-banner2.jpg'

const Banners = () => {
  return (
    <>
      <div className="container-fluid d-flex mt-5">
        <div className="img-banner d-flex " >
          <img src={banner1} alt="banner"  />
        </div>
        <div className="text">
            <h6 className="fw-bold">#FEATURED</h6>
          <h2>Glow Naturally</h2>
          <p>
            Discover the perfect blend of nature and science with No.8 skincare.
            Gentle, effective, and beautifully crafted, our products nourish
            your skin for a radiant, youthful glow.
          </p>
          <button className="bg-black text-white fw-bold border-0 py-2 px-5">SHOP NOW</button>
        </div>
      </div>

      <div className="container-fluid d-flex mt-5 flex-row-reverse">
        <div className="img-banner2 d-flex " >
          <img src={banner2} alt="banner"  />
        </div>
        <div className="text2 ">
            <h6 className="fw-bold">#FEATURED</h6>
          <h2>Glow Naturally</h2>
          <p>
            Discover the perfect blend of nature and science with No.8 skincare.
            Gentle, effective, and beautifully crafted, our products nourish
            your skin for a radiant, youthful glow.
          </p>
          <button className="bg-black text-white fw-bold border-0 py-2 px-5">SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default Banners;
