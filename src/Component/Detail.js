import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import '../Css/Rout.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Slice";
import Footer from "./Footer1";

function DetailsCompo() {
    const [data, setData] = useState([])
    const Navi = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams()
    const newid = parseInt(id)

    useEffect(() => {
        axios.get("https://ecombackend-aiqz.onrender.com/api/getdata")
            .then((res) => setData(res.data))
            .catch((err) => {
                console.log("error")
            })
    }, [id])

    return (
        <>
            <div className="details_wrrraper">
                {data.filter((item) => item.id === newid).map((item, index) => {
                    const {
                        id = item.id,
                        name = item.name,
                        image = item.image,
                        rating = item.rating,
                        price = parseInt(item.price),
                    } = item;
                    return (
                        <div key={index} className="details_first_div">
                            <img src={item.image} alt="Not Found" className="all_images_details" />
                            <div className="underdiv_details">
                                <h3 className="title_details">{item.name}</h3>
                                <h3 className="price_details">₹:{item.price}.00</h3>
                                <p className="moredetails"> <h2>Discreption</h2>
                                    {item.name}<br />
                                    {item.subCategory}<br />
                                    {item.brand}<br />
                                    {item.rating}</p>
                                <button className="btnaddcard_details" onClick={() =>
                                    dispatch(addtoCart({ id, price, image, name, rating }))
                                }>add to card</button>
                            </div>
                        </div>
                    )
                })}


                <button onClick={() => Navi(-1)} className="goback">Go Back</button>
            </div>

            <Footer />
        </>
    )
}
export default DetailsCompo
