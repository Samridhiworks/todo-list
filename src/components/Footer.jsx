import React from "react";

const Footer =()=>{
    return(
        <>
        <footer>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row f-contents">
                    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h2 className="pb-3">SHOP</h2>
                        <p>#Trend Now</p>
                        <p>Fragrance</p>
                        <p>Makeup</p>
                        <p>Nail</p>
                        <p>Beauty Accessories</p>
                    </div>
                    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h2 className="pb-3">INFORMATION</h2>
                        <p>About Us</p>
                        <p>Fragrance</p>
                        <p>Makeup</p>
                        <p>Nail</p>
                        <p>Beauty Accessories</p>
                    </div>
                    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h2 className="pb-3">CUSTOMER SERVICE</h2>
                        <p>Search Terms</p>
                        <p>Advanced Search</p>
                        <p>Orders and Returns</p>
                        <p>RSS</p>
                        <p>Beauty Accessories</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h2 className="pb-3">NEWSLETTER SIGN UP</h2>
                        <p>Receive our latest updates about our products and promotions.</p>
                       <input placeholder="Enter email" className="f-inputbox mb-3" />
                       <input type="submit" className="f-btn"/>
                       <h3>STAY CONNECTED</h3>
                       <div className="all-icons">
                       <i class="fa-brands fa-facebook-f"></i>
                       <i class="fa-brands fa-x-twitter"></i>
                       <i class="fa-brands fa-square-instagram"></i>
                       <i class="fa-brands fa-whatsapp"></i>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer