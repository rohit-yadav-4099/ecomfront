import { useEffect, useState } from "react"
import '../Css/Accesories.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../Redux/Slice"
import Footer from "./Footer1"

function Accesories() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchapi() {
            const ffdata = await fetch("https://ecom-sk46.onrender.com/api/getdata")
            const res = await ffdata.json()
            setData(res)
        }
        fetchapi()
    })
    return (
        <>
            {/* <div className="sport_container">
                {data.filter((item) => item.id === 48).map((item, index) => {
                    return (
                        <div key={index} className="underdiv_two_sport">
                            <img src={item.images} alt="Not Found" className="topimage_sport" />
                        </div>
                    )
                })}
            </div> */}
            <div className="image_sport_container">
                {data.filter((item) => item.category === "Accesories").map((item, index) => {
                    const {
                        id = item.id,
                        name = item.name,
                        image = item.image,
                        price = parseInt(item.price),

                    } = item;
                    return (
                        <>
                            <div key={index} className="underdiv_sport">
                                <NavLink to={`/details/${item.id}`}>         <img src={item.image} alt="Not Found" className="all_images_sport" /></NavLink>
                                <div className="underdiv_sport_two">
                                    <span>{item.name}cxbdj</span>
                                    <span className="price_sport"> ₹:{item.price}.00</span>
                                    {/* <NavLink to={`/addcard/${item.id}`}>  <button className="btnaddcard_sport" onClick={() => dispatch(addtoCart({ id, price, image, name }))} >add to cart</button></NavLink> */}
                                    <button
                                        className="btnaddcard_home"
                                        onClick={() =>
                                            dispatch(addtoCart({ id, price, image, name }))
                                        }
                                    >
                                        add to cart
                                    </button>
                                </div>


                            </div>

                        </>
                    )
                })}

            </div>
            <Footer />

        </>
    )
}
export default Accesories
