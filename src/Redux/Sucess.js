import { useNavigate } from "react-router-dom";
import "../Css/Sucess.css";

function Success() {
  const Navi = useNavigate();
  return (
    <>
      <div className="sucesss">Payment Success</div>
      <div className="gobackpayment_div">
      <button onClick={() => Navi("/groceries")} className="gobackpayment">go to home page</button>
      </div>
     
    </>
  );
}

export default Success;