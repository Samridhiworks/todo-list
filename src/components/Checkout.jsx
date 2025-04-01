import React from "react";
import checkout from '../Assets/checkout.jpg';
import { useSelector } from "react-redux";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart);

    return (
        <>
            <div className="checkouts">
                <div className="container-fluid">
                    <div className="checkout-banner">
                        <img src={checkout} alt="Checkout Banner" />
                    </div>
                    <div className="container d-flex">
                        {/* Checkout Form */}
                        <form action="#" method="#">
                            <div className="name-field d-flex">
                                <input type="text" placeholder="Enter First Name*" />
                                <input type="text" placeholder="Enter Last Name*" />
                            </div>
                            <input type="text" placeholder="Enter Street Address" />
                            <input type="number" placeholder="Enter Contact Number*" />
                            <div className="state-details">
                                <input type="text" placeholder="Enter State*" />
                                <input type="text" placeholder="Enter Pincode*" />
                            </div>
                            <input type="email" placeholder="Enter Email Address*" />
                        </form>

                        {/* Payment Section */}
                        <div className="payment">
                            {cartItems.length !== 0 ? (
                               <>
                               <ul>
                                {cartItems.map((item)=>(
                                   <li key={item.id}>
                                    <p>Your Order:
                                        {item.name}</p>
                                   </li>
                                ))}
                               </ul>
                               </>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
