import { useEffect, useState } from "react"
import '../Css/Fashion.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../Redux/Slice"
import Footer from "./Footer1"
function GroceriesCompo() {
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

            {/* <div className="fashion_container">
                {data.filter((item) => item.id === 16).map((item, index) => {
                    return (
                        <div key={index} className="underdiv_two_fashion">
                            <img src={item.images} alt="Not Found" className="topimage_fashion" />
                        </div>
                    )
                })}
            </div> */}

            <div className="image_fashion_container">
                {data.filter((item) => item.category === "Fashion").map((item, index) => {
                    const {
                        id = item.id,
                        name = item.name,
                        image = item.image,
                        price = parseInt(item.price),

                    } = item;
                    return (
                        <>
                            <div key={index} className="underdiv_fashion">
                                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found" className="all_images_fashion" /></NavLink>

                                <div className="underiv_fashion_two">
                                    <h3 className="title_fashion">{item.name}</h3>
                                    <span className="price_fashion">₹:{item.price}.00</span>


                                    {/* <NavLink to={`/addcard/${item.id}`}><button onClick={() => dispatch(addtoCart({ id, price, image, name }))} className="btnaddcard_fashion">add to card</button></NavLink> */}
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
export default GroceriesCompo
