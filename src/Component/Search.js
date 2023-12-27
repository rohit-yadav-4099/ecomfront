import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Search.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Slice";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const Navi = useNavigate();
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async () => {
        const response = await fetch(`https://ecombackend-aiqz.onrender.com/search/${query}`);
        const data = await response.json();

        setResults(data);
    };

    console.log(results)
    return (
        <>
            <div className="search_data">
                <div className="under_input_data">
                    <button onClick={() => Navi(-1)} className="goback_input">
                        Go Back
                    </button>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="search product"
                        className="input_feild"
                    />
                    <button onClick={handleSubmit} className="goback_input">
                        Search
                    </button>
                </div>
            </div>

            <div className="all_data">
                {results.map((item, index) => {
                    const {
                        id = item.id,
                        name = item.name,
                        image = item.image,
                        price = parseInt(item.price),
                    } = item;

                    return (
                        <>
                            <div className="underdiv_data" key={index}>
                                <div>
                                    <img src={item.image} className="image_data" alt="Not Found" />
                                </div>
                                <div className="details_data">
                                    <h1>{item.name}</h1>
                                    <h1>₹:{item.price}.00</h1>
                                    {/* <NavLink to={`/addcard/${item.id}`}>
                                        <button
                                            onClick={() =>
                                                dispatch(addtoCart({ id, price, image, name }))
                                            }
                                            className="btnaddcard_fashion"
                                        >
                                            add to card
                                        </button>
                                    </NavLink> */}
                                    <button
                                            onClick={() =>
                                                dispatch(addtoCart({ id, price, image, name }))
                                            }
                                            className="btnaddcard_fashion"
                                        >
                                            add to card
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

export default SearchBar;
