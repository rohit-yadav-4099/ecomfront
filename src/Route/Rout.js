import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import HomeCompo from "../Component/Home";
// import GroceriesCompo from "../Component/Mobile";
import FashionCompo from "../Component/Fashion";
// import PremiumCompo from "../Component/Laptop";
// import SportToyCompo from "../Component/Accesories";
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


function RouteCompo() {
    // const auth=localStorage.getItem("name")
    const [count, setCount] = useState(false);

    // const auth=localStorage.getItem("token")
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

    return (
        <>
            {/* <BrowserRouter> */}

            <div className="header_main">
                {/* <img
                    src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-store-icon-in-line-style-png-image_1736161.jpg"
                    height="60"
                    alt="Not Found"
                    className="imageicon"
                /> */}
                <span className="shop_heading">iShop</span>

                <div>
                    {/* <SearchBar /> */}
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
                    <i className={`fa-solid ${count ? "fa-close" : "fa-bars"}`}></i>
                </div>
            </div>

            <div className="routeparent">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <div onDoubleClick={toggleMobileMenu} className="underdiv_all_nav">
                        <NavLink to="/mobile" className="navlink">
                            Mobile
                        </NavLink>
                    </div>
                    {isMobiledata && (
                        <ul className="sub_groceries">
                            <li>
                                <NavLink to="/mobile/tea">Samsung</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mobile/coffee">iPhone</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onDoubleClick={toggleFashionMenu} className="underdiv_all_nav">
                        <NavLink to="/fashion" className="navlink">
                            Fashion
                        </NavLink>
                    </div>
                    {isFashiondata && (
                        <ul className="sub_fashion">
                            <li>
                                <NavLink to="/fashion/men">men</NavLink>
                            </li>
                            <li>
                                <NavLink to="/fashion/women">women</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onDoubleClick={toggleLaptopMenu} className="underdiv_all_nav">
                        <NavLink to="/laptop" className="navlink">
                            Laptop
                        </NavLink>
                    </div>
                    {isLaptopData && (
                        <ul className="sub_premium">
                            <li>
                                <NavLink to="/laptop/pears">pears</NavLink>
                            </li>
                            <li>
                                <NavLink to="/laptop/apple">Apple</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onDoubleClick={toggleAccesoriesMenu} className="underdiv_all_nav">
                        <NavLink to="/accesories" className="navlink">
                            Accesories
                        </NavLink>
                    </div>
                    {isAccesoriesData && (
                        <ul className="sub_sport">
                            <li>
                                <NavLink to="/sport/toy">Toy Figure</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sport/babytoy">Baby Toys</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
            </div>

            {/* *********************************************loginand register******************************* */}

            {/* <NavLink to="/" ><button className="btnone">Regiter</button></NavLink>
        <NavLink to="/login"><button className="btnone">Login</button></NavLink> */}
            {/*


{/* *****************************************************************? */}
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

            {/* **************************************************************** */}

            <Routes>
                <Route path="/" element={<HomeCompo />}></Route>
                <Route element={<PrivateCompo />}>
                    <Route path="/mobile" element={<Mobile />}>
                        {/* {" "} */}
                    </Route>
                    {/* <Route path="groceries/tea" element={<TeaCompo />}></Route> */}
                    {/* <Route path="groceries/coffee" element={<CoffeCompo />}></Route> */}
                    <Route path="/fashion" element={<FashionCompo />}>
                        {/* {" "} */}
                    </Route>
                    <Route path="fashion/men" element={<MenCompo />}></Route>
                    <Route path="fashion/women" element={<WomenCompo />}></Route>
                    <Route path="/laptop" element={<Laptop />}>
                        {/* {" "} */}
                    </Route>
                    {/* <Route path="premium/pears" element={<PearCompo />}></Route> */}
                    <Route path="laptop/apple" element={<AppleCompo />}></Route>
                    <Route path="/accesories" element={<Accesories />}>
                        {/* {" "} */}
                    </Route>
                    {/* <Route path="sport/toy" element={<ToyCompo />}></Route> */}
                    {/* <Route path="sport/babytoy" element={<BabyToyCompo />}></Route> */}
                    <Route path="/addcard/:id" element={<Cart />}></Route>
                    <Route path="/details/:id" element={<DetailsCompo />}></Route>
                    <Route path="/search" element={<SearchBar />}></Route>
                    {/* <Route path="/success" element={<Success />}></Route>
          <Route path="/cancel" element={<Cancel />}></Route> */}
                </Route>

                <Route path="/login" element={<LoginButton />}></Route>
                <Route path="/register" element={<RegisterButton />}></Route>
                <Route path="/logout" element={<LogOut />}></Route>
            </Routes>

            {/* </BrowserRouter> */}
            {/* <Footer/> */}
        </>
    );
}

export default RouteCompo;
