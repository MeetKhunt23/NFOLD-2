import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import turtle from "../../assets/slow_mode.png";
import "./editprofile.css";
import carengine from "../../assets/car_engine.png";
import race_car from "../../assets/race_car_1.png";

const Subscription_plans = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="upperheadermyvehicles">
          <div onClick={() => navigate(-1)} className="backbtn">
            <IoIosArrowBack />
            Back
          </div>
          <div className="myvehiclesheader">My Vehicles</div>
        </div>
      </div>
      <div className="vehicleaddmaindiv">
        <div className="selectplandiv">
          <div className="packagecontainer-1" onClick={()=>{window.location.href="./add_vehicle"}}>
            <div className="packageselect">Select</div>
            <div className="packagecontainer1">
              <div>
                <img src={turtle} className="packageimg" />
              </div>
              <div>Lite Package</div>
            </div>
            <div className="packagecontainer2">
              <div className="packagevaladity">30 Days</div>
              <div className="packagevaladity">1 CARS</div>
            </div>
            <div className="packagecontainer3">FREE</div>
          </div>
        </div>
        <div className="selectplandiv">
          <div className="packagecontainer-2" onClick={()=>{window.location.href="./add_vehicle"}}>
          <div className="packageselect">Select</div>
            <div className="packagecontainer1">
              <div>
                <img src={carengine} className="packageimg" />
              </div>
              <div>Basic Package</div>
            </div>
            <div className="packagecontainer2">
              <div className="packagevaladity">30 Days</div>
              <div className="packagevaladity">UNLIMITED CARS</div>
            </div>
            <div className="packagecontainer3">AED 17/DAY</div>
          </div>
        </div>
        <div className="selectplandiv">
          <div className="packagecontainer-3" onClick={()=>{window.location.href="./add_vehicle"}}>
          <div className="packageselect">Select</div>
            <div className="packagecontainer1">
              <div>
                <img src={race_car} className="packageimg" />
              </div>
              <div>Extended Package</div>
            </div>
            <div className="packagecontainer2">
              <div className="packagevaladity">30 Days</div>
              <div className="packagevaladity">UNLIMITED CARS</div>
            </div>
            <div className="packagecontainer3">AED 30/DAY</div>
          </div>
        </div>
        <h3 className="h3placeadd">
          Place Your ad using any of the above options <br />
          <br />
          OR
          <br />
        </h3>
        <div className="subsasdealerdiv">
          <div className="subsasdealerbtn">Subscribe as a Dealer</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription_plans;
