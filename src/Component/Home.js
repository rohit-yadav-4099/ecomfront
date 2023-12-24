import { useEffect, useState } from "react";
import "../Css/Home.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Slice";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Footer from "./Footer1";
// import { loadStripe } from "@stripe/stripe-js";


function HomeCompo() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchapi() {
            const ffdata = await fetch("https://ecom-sk46.onrender.com/api/getdata");
            const res = await ffdata.json();
            setData(res);
        }
        fetchapi();
    });
    return (
        <>

            <div className="home_container">
                {data
                    .filter((item) => item.id === 28)
                    .map((item, index) => {
                        return (
                            <>
                                <div key={index} className="underdiv_two_home">
                                    <Carousel
                                        infiniteLoop={true}
                                        useKeyboardArrows
                                        autoPlay
                                        interval={3000}
                                        stopOnHover={false}
                                        stopOnInteraction={false}
                                        showStatus={false}
                                        showIndicators={false}
                                        showThumbs={false}
                                    >
                                        <div>
                                            <img
                                                className="topimage_home_two"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3OM5JUdqPFmtOptRgw21wuU9QH4H5V-sDyHq5-oVo5w&s"
                                                alt="Not Found"
                                                width="100%"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                className="topimage_home_two"
                                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf180e2d-5bea-4aeb-8aba-9ea2f09e7aef/deu2up6-8d45c200-e05d-4c5d-b45b-05d01acfc429.jpg/v1/fill/w_1280,h_720,q_75,strp/fashion_sale_web_banner_by_koshaldesign_deu2up6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmYxODBlMmQtNWJlYS00YWViLThhYmEtOWVhMmYwOWU3YWVmXC9kZXUydXA2LThkNDVjMjAwLWUwNWQtNGM1ZC1iNDViLTA1ZDAxYWNmYzQyOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Vo7oFfCQJXOWmwvoRDUVCksRun6nQ9gh20-61DnbBOY"
                                                alt="Not found"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                className="topimage_home_two"
                                                src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a53/buy/Master_1440x450.jpg"
                                                alt="Not Found"
                                                width="100%"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                className="topimage_home_two"
                                                src="https://img.freepik.com/free-vector/gradient-horizontal-banner-template-cyber-monday-sale_23-2150842096.jpg"
                                                alt="Not Found"
                                                width="100%"
                                            />
                                        </div>

                                    </Carousel>
                                </div>

                                <div></div>
                            </>
                        );
                    })}
            </div>

            <div className="image_home_container">
                {data
                    .filter((item) => item.id % 2 === 0)
                    .map((item, index) => {
                        const {
                            id = item.id,
                            name = item.name,
                            rating = item.rating,
                            image = item.image,
                            price = parseInt(item.price),
                        } = item;
                        return (
                            <>
                                <div key={index} className="underdiv_home">
                                    <NavLink to={`/details/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt="Not Found"
                                            className="all_images_home"
                                        />
                                    </NavLink>

                                    <div className="underdiv_home_two">
                                        <span>{item.name}</span>
                                        <span className="price_home">₹:{item.price}.00</span>
                                        {/* <NavLink to={`/addcard/${item.id}`}>
                                            <button
                                                className="btnaddcard_home"
                                                onClick={() =>
                                                    dispatch(addtoCart({ id, price, image, name }))
                                                }
                                            >
                                                add to cart
                                            </button>
                                            
                                        </NavLink> */}
                                        <button
                                            className="btnaddcard_home"
                                            onClick={() =>
                                                dispatch(addtoCart({ id, price, image, name, rating }))
                                            }
                                        >
                                            add to cart
                                        </button>

                                    </div>

                                </div>
                            </>
                        );
                    })}

            </div>



        </>

    );
}
export default HomeCompo;
