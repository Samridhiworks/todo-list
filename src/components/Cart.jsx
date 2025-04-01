import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'


const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    let count = 1;

    // Calculate total price correctly
    let total = cartItems.reduce((acc, item) => acc + (item.new_price || 0), 0);

    return (
        <div className="cart-sec">
        <div className="container-fluid">
            <div className="container">
            <h2 className="cart-head fw-bold text-center pt-5">My Cart<span>Items</span> </h2>
            <table border="1" >
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length !== 0 ? (
                        cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{count++}</td>
                               
                                <td>
                                    <img src={item.image}/></td>
                                <td>{item.name}</td>
                                <td>${item.new_price}</td>
                                <td>1</td>
                                <td>${item.new_price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                                No items in the cart
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Display Total Price Outside the Map to Prevent NaN */}
            <h3>Total Price: ${total}</h3>
            <div className="checkout-btn d-flex justify-content-end">
            <button className="bg-dark text-white rounded py-2 px-4 mb-5"><Link to='/checkout'>Buy Now</Link></button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Cart;
