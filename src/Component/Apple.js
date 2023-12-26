import { useEffect, useState } from "react";
import "../Css/Apple.css";
import { addtoCart } from "../Redux/Slice";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function PearCompo() {
  const [data, setData] = useState([]);
  const Navi = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchapi() {
      const ffdata = await fetch("https://ecombackend-aiqz.onrender.com/api/getdata");
      const res = await ffdata.json();

      setData(res);
    }
    fetchapi();
  });
  return (
    <>
      <div className="image_apple_container">
        {data
          .filter((item) => item.subCategory === "iPhone")
          .map((item, index) => {
            const {
              id = item.id,
              name = item.name,
              image = item.image,
              price = parseInt(item.price),
            } = item;
            return (
              <div>
                <div key={index} className="underdiv_apple">
                  <NavLink to={`/details/${item.id}`}>
                    <img
                      src={item.image}
                      alt="Not Found"
                      className="all_images_apple"
                    />
                  </NavLink>

                  <span className="price_apple">₹:{item.price}.00</span>
                  <h3 className="title_apple">{item.name}</h3>
                  <NavLink to={`/addcard/${item.id}`}>
                    {" "}
                    <button
                      className="btnaddcard_apple"
                      onClick={() =>
                        dispatch(addtoCart({ id, price, image, name }))
                      }
                    >
                      add to cart
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>

      <button className="goback" onClick={() => Navi("/groceries")}>
        Go Back
      </button>
    </>
  );
}
export default PearCompo;
