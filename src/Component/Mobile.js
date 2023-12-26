import { useEffect, useState } from "react"
import '../Css/Mobile.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../Redux/Slice"
import Footer from "./Footer1"

function Mobile() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {

        async function fetchapi() {
            const ffdata = await fetch("https://ecombackend-aiqz.onrender.com/api/getdata")
            const res = await ffdata.json()
            console.log(res)
            setData(res)
        }
        fetchapi()


    })
    return (
        <>

            <div className="image_groceries_container">
                {data.filter((item) => item.category === "mobile").map((item, index) => {
                    const {
                        id = item.id,
                        name = item.name,
                        image = item.image,
                        price = parseInt(item.price),
                    } = item;
                    return (
                        <>
                            <div key={index} className="underdiv_groceries">
                                <NavLink to={`/details/${item.id}`}>
                                    <img src={item.image} alt="Not Found" className="all_images_groceries" /></NavLink>

                                <div className="underdiv_groceries_two">
                                    <span>{item.name}</span>
                                    <span className="price_groceries">₹:{item.price}.00</span>

                                    {/* <NavLink to={`/addcard/${item.id}`}>
                                        <button onClick={() => dispatch(addtoCart({ id, price, image, name, title }))} className="btnaddcard"> add to card</button>

                                    </NavLink> */}
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
export default Mobile
