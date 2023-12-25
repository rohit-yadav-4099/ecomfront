import { useEffect, useState } from "react";
import "../Css/Men.css";
import { NavLink, useNavigate } from "react-router-dom";

import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";

function PearCompo() {
    const [data, setData] = useState([]);
    const Navi = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchapi() {
            const ffdata = await fetch("https://ecomweb-c8m3.onrender.com/api/getdata");
            const res = await ffdata.json();

            setData(res);
        }
        fetchapi();
    });
    return (
        <>

            <div className="image_men_container">
                {data
                    .filter((item) => item.category === "Fashion")
                    .map((item, index) => {
                        const {
                            id = item.id,
                            name = item.name,
                            image = item.image,
                            price = parseInt(item.price),
                        } = item;
                        return (
                            <div>
                                <div key={index} className="underdiv_men">
                                    <NavLink to={`/details/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt="Not Found"
                                            className="all_images_men"
                                        />
                                    </NavLink>

                                    <div className="headingproduct_men">
                                        <p></p>
                                    </div>
                                    <span className="price_men">₹:{item.price}.00</span>
                                    <h3 className="title_men">{item.name}</h3>
                                    <NavLink to={`/addcard/${item.id}`}>
                                        {" "}
                                        <button className="btnaddcard_men" onClick={() =>
                                            dispatch(addtoCart({ id, price, image, name }))
                                        }>add to cart</button>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <button
                onClick={() => Navi("/fashion")}
                style={{
                    width: "20vw",
                    height: "8vh",
                    borderRadius: "20px",
                    position: "relative",
                    left: "40%",
                    top: "5vh",
                    background: "#99ccff",
                }}
            >
                Go Back
            </button>
        </>
    );
}
export default PearCompo;
