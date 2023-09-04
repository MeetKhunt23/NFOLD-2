import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./contact_us.css";
import { TfiYoutube } from "react-icons/tfi";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { FaPhoneSquareAlt,FaLocationDot } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact_us = () => {
  return (
    <div>
      <footer>
        <div className="footersec">
        <div className="fsec-1">
          <div>
            <img src="https://nearfold.com/assets/img/logo.png" />
          </div>
          <div>
            NearFold is an application that helps users to find nearby products
            or services based on their location.
          </div>
          <div className="socaildiv">
            <div><BiLogoFacebook className="socialicons"/></div>
            <div><BiLogoTwitter className="socialicons"/></div>
            <div><BiLogoLinkedin className="socialicons"/></div>
            <div><TfiYoutube className="socialicons"/></div>
          </div>
        </div>
        <div className="fsec-2">
            <div>
                Our Adress
            </div>
            <div>
                <div className="contactwithtxt">
                    <div><FaPhoneSquareAlt className="contacticons"/></div>
                    <div>971 7 244 6589</div>
                </div>
                <div className="contactwithtxt">
                    <div><MdEmail className="contacticons"/></div>
                    <div className="contactus"><a href = "mailto:meetkhunt2301@gmail.com">support@nearfold.com</a></div>
                </div>
                <div className="contactwithtxt">
                    <div><IoLocation className="contacticons"/></div>
                    <div>12 Serena Bella Casa, Dubai, UAE.</div>
                </div>
            </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact_us;
