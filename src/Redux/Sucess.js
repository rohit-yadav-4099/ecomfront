import { useNavigate } from "react-router-dom";
import "../Css/Sucess.css";

function Success() {
  const Navi = useNavigate();
  return (
    <>
      <div className="paymentpage">
        <div className="sucessgif">
          <img src="./imagepng/succes.gif" alt="success" ></img>
        </div>
        <div className="sucesss">Payment Success</div>
        <div className="gobackpayment_div">
          <button onClick={() => Navi("/")} className="gobackpayment">go to home page</button>
        </div>
      </div>
    </>
  );
}

export default Success;
