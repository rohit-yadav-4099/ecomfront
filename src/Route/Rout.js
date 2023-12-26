import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import HomeCompo from "../Component/Home";
import FashionCompo from "../Component/Fashion";
import "../Css/Rou.css";
import MenCompo from "../Component/Men";
import WomenCompo from "../Component/Women";
import AppleCompo from "../Component/Apple";
import DetailsCompo from "../Component/Detail";
import { useState } from "react";
import LoginButton from "../LoginSignUp/Login";
import RegisterButton from "../LoginSignUp/Register";
import PrivateCompo from "../Component/Private";
import LogOut from "../LoginSignUp/Logout";
import SearchBar from "../Component/Search";
import { useSelector } from "react-redux";
import Cart from "../Redux/AddtoCart";
import Accesories from "../Component/Accesories";
import Laptop from "../Component/Laptop";
import Mobile from "../Component/Mobile";
import Cancel from "../Redux/Cancel";

function RouteCompo() {
    // const searchNavigate = useNavigate();
    // const [searchTerm, setsearchTerm] = useState("")
    const [count, setCount] = useState(false);
    const Navi = useNavigate();
    const auth = localStorage.getItem("token");
    const countItem = useSelector((state) => state.Cart.cart);
    <span>{countItem.length}</span>;

    const [isFashiondata, setIsFashionData] = useState(false);
    const [isLaptopData, setIsLaptopData] = useState(false);
    const [isMobiledata, setIsMobileData] = useState(false);
    const [isAccesoriesData, setIsAccesoriesData] = useState(false);

    const toggleFashionMenu = () => {
        setIsFashionData(!isFashiondata);
    };
    const toggleLaptopMenu = () => {
        setIsLaptopData(!isLaptopData);
    };
    const toggleMobileMenu = () => {
        setIsMobileData(!isMobiledata);
    };
    const toggleAccesoriesMenu = () => {
        setIsAccesoriesData(!isAccesoriesData);
    };

    const logoutfunc = () => {
        localStorage.clear();
        Navi("/register");
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     searchNavigate(`/search/${searchTerm}`)
    // }

    return (
        <>
            {/* <BrowserRouter> */}

            <div className="header_main">
                <div className="language">
                    <select>
                        <option>English</option>
                        <option>English UK</option>
                        <option>English US</option>
                        <option>Hindi</option>
                    </select>
                </div>

                <span className="shop_heading">iShop</span>
                {/* <div
                 className="search-bar">
                    <input 
                    onSubmit={handleSubmit}
                    value={searchTerm}
                    onChange={(e)=>setsearchTerm(e.target.value)}
                    type="text" 
                    placeholder="Search Product"
                    />
                </div> */}

                <div>

                    <NavLink to="/search" className="serch_icon">
                        <div className="cart-icon">
                            <img src="./imagepng/search.jpg" alt="cart" ></img>
                        </div>
                    </NavLink>
                </div>
                <span>
                    <NavLink to="addcard/:id">
                        {" "}
                        <div className="cart-icon">
                            <img src="./imagepng/cart.png" alt="cart"></img>
                            <p>{countItem.length}</p>
                        </div>
                    </NavLink>
                </span>

                {auth ? (
                    <NavLink to="/login">
                        <button onClick={logoutfunc} className="btnone lgtbtn">
                            Logout
                        </button>
                    </NavLink>
                ) : (

                    <span>
                        <NavLink to="/login">
                            <button className="btnone loginbtn">signup</button>
                        </NavLink>

                    </span>
                )}

                <div onClick={() => setCount(!count)} className="display">
                    {/* <i className={`fa-solid ${count ? "fa-close" : "fa-bars"}`}></i> */}
                    <img className="menupng" src="./imagepng/menu.png" alt="menu" ></img>
                </div>
            </div>
            

            <div className="routeparent">

                <li>
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>

                <li>
                    <div onDoubleClick={toggleMobileMenu} className="underdiv_all_nav">
                        <NavLink to="/mobile" className="navlink">
                            Mobile
                        </NavLink>
                    </div>
                    {/* {isMobiledata && (
                        <ul className="sub_groceries">
                            <li>
                                <NavLink to="/mobile/samsung">Samsung</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mobile/iphone">iPhone</NavLink>
                            </li>
                        </ul>
                    )} */}
                </li>
                <li>
                    <div onDoubleClick={toggleFashionMenu} className="underdiv_all_nav">
                        <NavLink to="/fashion" className="navlink">
                            Fashion
                        </NavLink>
                    </div>
                    {/* {isFashiondata && (
                        <ul className="sub_fashion">
                            <li>
                                <NavLink to="/fashion/men">men</NavLink>
                            </li>
                            <li>
                                <NavLink to="/fashion/women">women</NavLink>
                            </li>
                        </ul>
                    )} */}
                </li>
                <li>
                    <div onDoubleClick={toggleLaptopMenu} className="underdiv_all_nav">
                        <NavLink to="/laptop" className="navlink">
                            Laptop
                        </NavLink>
                    </div>
                    {/* {isLaptopData && (
                        <ul className="sub_premium">
                            <li>
                                <NavLink to="/laptop/acer">Acer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/laptop/apple">Apple</NavLink>
                            </li>
                        </ul>
                    )} */}
                </li>
                <li>
                    <div onDoubleClick={toggleAccesoriesMenu} className="underdiv_all_nav">
                        <NavLink to="/accesories" className="navlink">
                            Accesories
                        </NavLink>
                    </div>
                    {/* {isAccesoriesData && (
                        <ul className="sub_sport">
                            <li>
                                <NavLink to="/accesories/airdops">Airdops</NavLink>
                            </li>
                            <li>
                                <NavLink to="/accesories/tv">TV</NavLink>
                            </li>
                        </ul>
                    )} */}
                </li>

            </div>


            <div className={count ? "hambergerlinksShows" : "hambergerlinksHide"}>
                <ul className="navbar-listResponsive">
                    <li className="listres">
                        {auth ? (
                            <NavLink
                                onClick={() => {
                                    setCount(!count);
                                    logoutfunc();
                                }}
                                to="/register"
                                className="navlinkRes"
                                style={({ isActive }) => ({
                                    color: isActive ? "aqua" : "Navy",
                                })}
                            >
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink
                                onClick={() => setCount(!count)}
                                to="/login"
                                className="navlinkRes"
                                style={({ isActive }) => ({
                                    color: isActive ? "aqua" : "Navy",
                                })}
                            >
                                Login
                            </NavLink>
                        )}
                    </li>
                    <li className="listresponsive">
                        <NavLink
                            onClick={() => setCount(!count)}
                            to="/"
                            className="navlinkResponsive"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="listresponsive">
                        <NavLink
                            onClick={() => setCount(!count)}
                            to="/mobile"
                            className="navlinkResponsive"
                        >
                            Mobile
                        </NavLink>
                    </li>
                    <li className="listresponsive">
                        <NavLink
                            onClick={() => setCount(!count)}
                            to="/fashion"
                            className="navlinkResponsive"
                        >
                            Fashion
                        </NavLink>
                    </li>
                    <li className="listresponsive">
                        <NavLink
                            onClick={() => setCount(!count)}
                            to="/laptop"
                            className="navlinkResponsive"
                        >
                            Laptop
                        </NavLink>
                    </li>
                    <li className="listresponsive">
                        <NavLink
                            onClick={() => setCount(!count)}
                            to="/accesories"
                            className="navlinkResponsive"
                        >
                            Accesories
                        </NavLink>
                    </li>
                </ul>

            </div>

            <Routes>
                <Route path="/" element={<HomeCompo />}></Route>
                <Route element={<PrivateCompo />}>
                    <Route path="/mobile" element={<Mobile />}>
                        {/* {" "} */}
                    </Route>
                    <Route path="/fashion" element={<FashionCompo />}>
                        {/* {" "} */}
                    </Route>
                    <Route path="fashion/men" element={<MenCompo />}></Route>
                    <Route path="fashion/women" element={<WomenCompo />}></Route>
                    <Route path="/laptop" element={<Laptop />}>
                        {/* {" "} */}
                    </Route>
                    <Route path="laptop/apple" element={<AppleCompo />}></Route>
                    <Route path="/accesories" element={<Accesories />}>
                        {/* {" "} */}
                    </Route>
                    <Route path="/addcard/:id" element={<Cart />}></Route>
                    <Route path="/details/:id" element={<DetailsCompo />}></Route>
                    <Route path="/search" element={<SearchBar />}></Route>
                </Route>

                <Route path="/login" element={<LoginButton />}></Route>
                <Route path="/register" element={<RegisterButton />}></Route>
                <Route path="/logout" element={<LogOut />}></Route>
                <Route path="/cancle" element={<Cancel/>}/>
            </Routes>
            {/* </BrowserRouter> */}

        </>
    );
}

export default RouteCompo;
