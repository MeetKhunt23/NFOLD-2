import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./my_vehicles.css";
import dolar from "../../assets/dollar-coin-vector-1953442.png";
import car from "../../assets/car img.png";
import calender from "../../assets/calender.png";
import modification from "../../assets/modification.png";
import edit from "../../assets/edit.png";
import deleted from "../../assets/delete.png";
import orangecar from "../../assets/istockphoto-186578902-612x612.jpg";
import packagee from "../../assets/Package .png";
import carengine from "../../assets/car_engine.png";

const My_vehicles = () => {
  const navigate = useNavigate();
  const [array, setarray] = useState([0]);

  return (
    <>
          <div>
            <div className="upperheadermyvehicles">
              <div onClick={() => navigate(-1)} className="backbtn">
                <IoIosArrowBack />
                Back
              </div>
              <div className="myvehiclesheader">My Vehicles</div>
            </div>
          </div>
      {array.length ? (
        <>
          <div className="vehiclecont">
            <div className="basicpackage">
              <img src={carengine} className="logoimgss" />
              <h4>BASIC PACKAGE</h4>
            </div>
            <div style={{ display: "flex" }}>
              <div className="cont-1">
                <h2 className="modelname">TestTiya</h2>
                <div className="logowithtextcont">
                  <div className="logowithtext">
                    <div className="box">
                      <img src={dolar} className="logoimgs" />
                    </div>
                    <div className="box">AED 666/Month</div>
                  </div>
                  <div className="logowithtext">
                    <div className="box">
                      <img src={car} className="logoimgs" />
                    </div>
                    <div className="box">1 OF 1 Cars</div>
                  </div>
                </div>
                <div className="logowithtextcont">
                  <div className="logowithtext">
                    <div className="box">
                      <img src={calender} className="logoimgs" />
                    </div>
                    <div className="box">60 Days Left</div>
                  </div>
                  <div className="logowithtext">
                    <div className="box">
                      <img src={modification} className="logoimgs" />
                    </div>
                    <div className="box">Awaiting Moderation</div>
                  </div>
                  <div></div>
                </div>
                <div className="logowithtextcontdown">
                  <div className="crud-1">
                    <img src={edit} className="logoimgs" />
                  </div>
                  <div className="crud-1">
                    <img src={deleted} className="logoimgs" />
                  </div>
                  <div className="crud-2">List For Sale</div>
                </div>
              </div>
              <div className="cont-2">
                <img src={orangecar} className="vehicleimg" />
                <div className="featured">Featured</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="addvehicle" onClick={()=>{window.location.href="./subscription_plans"}}><h2>Add Vehicle</h2></div>
      )}
    </>
  );
};

export default My_vehicles;
