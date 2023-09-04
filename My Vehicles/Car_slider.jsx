import React from "react";
import Swiper, { SwiperSlide } from "swiper/react";
import car from "../../assets/istockphoto-186578902-612x612.jpg";
import "./Car_profile.css";
import racecar from "../../assets/auto-car-logo-template-vector-icon.jpg";
import speedcar from "../../assets/race_car_1.png";
import { Navigation,Thumbs } from "swiper";

const Car_slider = () => {
  return (
    <div>
      <Swiper loop={true} spaceBetween={10} navigation={true} modules={[Navigation,Thumbs]} grabCursor={true}>
        <SwiperSlide>
          <img src={car} className="carprofileimageselect" />
          <img src={racecar} className="carprofileimageselect" />
          <img src={speedcar} className="carprofileimageselect" />
          <img src={car} className="carprofileimageselect" />
          <img src={racecar} className="carprofileimageselect" />
          <img src={speedcar} className="carprofileimageselect" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Car_slider;
