import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Css/AddCart.css";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
import { NavLink, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const Navi = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Cart.cart);
    const total = data.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    const handleIncreaseQuantity = (id) => {
        dispatch(IncreaseQuantity({ id }));
    };
    const handleDecreaseQuantity = (id) => {
        dispatch(DecreaseQuantity({ id }));
    };

    // payment integrate...

    // const handleBuy = async () => {
    //     const stripe = await loadStripe("pk_test_51OQ699SDqC8mEPn5Q8XJZPCPbWDs3QdmS0iRgQP6uGNG3AHBgIIRiBrDhW6gB1QHC3C9GnJdLF7jW4sgEDA8zTJH00W163lIIE");
    //     const body = {
    //         products: data,
    //     };
    //     const headers = {
    //         "Content-Type": "application/json",
    //     };
    //     const response = await fetch("https://ecombackend-aiqz.onrender.com/api/create-checkout-session",
    //         {
    //             method: "POST",
    //             headers: headers,
    //             body: JSON.stringify(body),
    //         });
    //     const session = await response.json();
    //     const result = stripe.redirectToCheckout({
    //         sessionId: session.id,
    //     });
    //     if (result.error) {
    //         console.log(result.error);
    //     }
    // };
    return (
        <>
            <div className="container">
                {data &&
                    data.map((item, index) => {
                        return (
                            <div className="imgae_container" key={index}>
                                <div className="content-cart" key={index}>
                                    <img src={item.image} className="image" alt="Not Found" />
                                </div>
                                <div className="cart_details">
                                    <div>
                                        <h3>{item.name}</h3>
                                        <span>{item.subCategory}</span>
                                        <h3 className="cartprice">
                                            {"Rs " + item.price * item.quantity}.00

                                        </h3>

                                        <div className="addsubbtn">
                                            <button
                                                className="quantity-btn"
                                                onClick={() => handleDecreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() => handleIncreaseQuantity(item.id)}>
                                                +
                                            </button>
                                        </div>
                                        <div className="btncontainer">

                                            <span className="cart-subcontent">
                                                <h2>{item.model}</h2>
                                                <button
                                                    className="remove-cart"
                                                    onClick={() => dispatch(RemoveItem({ id: item.id }))} >
                                                    Remove Cart
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                <div className="total">
                    <div className="totalprice">
                        <span>Total : </span>
                        <span style={{ color: "blue" }}>{total}.00</span>
                    </div>
                    <div className="buy">
                        <NavLink to="/success">
                        {/* <button className="buybtn" onClick={handleBuy}>
                            Buy Now
                        </button> */}
                        <button className="buybtn">
                            Buy Now
                        </button>
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className="gobackcart">
                <button className="gobackaddcart" onClick={() => Navi(-1)}>
                    Go Back
                </button>
            </div><br /><br /><br />
        </>
    );
};
export default Cart;
