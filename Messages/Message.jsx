import React from 'react'
import "./Message.css"
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Message = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
            <div className="upperheadermyvehicles">
              <div onClick={() => navigate(-1)} className="backbtn">
                <IoIosArrowBack />
                Back
              </div>
              <div className="myvehiclesheader">Messages</div>
            </div>
          </div>
    </div>
  )
}

export default Message
