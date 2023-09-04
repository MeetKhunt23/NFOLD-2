import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Favourites = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="upperheadermyvehicles">
          <div onClick={() => navigate(-1)} className="backbtn">
            <IoIosArrowBack />
            Back
          </div>
          <div className="myvehiclesheader">My Favourites</div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
