import { useEffect, useState } from "react";
import "../Css/Women.css";
import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

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
            <div className="image_women_container">
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
                                <div key={index} className="underdiv_women">
                                    <NavLink to={`/details/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt="Not Found"
                                            className="all_images_women"
                                        />
                                    </NavLink>

                                    <div className="headingproduct_women">
                                        <p>{item.heading.slice(0, 50)}</p>
                                    </div>
                                    <span className="price_women">₹:{item.price}.00</span>
                                    <h3 className="title_women">{item.name}</h3>
                                    <NavLink to={`/addcard/${item.id}`}>
                                        {" "}
                                        <button className="btnaddcard_women" onClick={() =>
                                            dispatch(addtoCart({ id, price, image, name }))
                                        }>add to cart</button>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <button onClick={() => Navi("/fashion")} className="goback">
                Go Back
            </button>
        </>
    );
}
export default PearCompo;
