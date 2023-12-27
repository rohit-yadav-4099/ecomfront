import { useEffect, useState } from "react"
import '../Css/Laptop.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../Redux/Slice"

function Laptop() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchapi() {
            const ffdata = await fetch("https://ecombackend-aiqz.onrender.com/api/getdata")
            const res = await ffdata.json()
            setData(res)
        }
        fetchapi()
    })
    return (
        <>
            <div className="image_premium_container">
                {data.filter((item) => item.category === "laptop").map((item, index) => {
                    const {
                        id = item.id,
                        name = item.name,
                        image = item.image,
                        price = parseInt(item.price),
                    } = item;
                    return (
                        <>
                            <div key={index} className="underdiv_premium">
                                <NavLink to={`/details/${item.id}`}>    <img src={item.image} alt="Not Found" className="all_images_premium" /></NavLink>
                                <div className="underdiv_premium_two">
                                    <span>{item.name}laptop</span>
                                    <span className="price_premium">₹:{item.price}.00</span>
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
        </>
    )
}
export default Laptop
