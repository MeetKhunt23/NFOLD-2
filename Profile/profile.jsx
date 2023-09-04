import React, { useEffect, useState } from "react";
import "./profile.css";
import "./style.css";
import banner from "../../assets/Untitled-1.png";
import vehicle from "../../assets/Capture.PNG";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Change_location from "../Edit profile/Change_location";
import Map_cluster from "../Edit profile/Map_cluster";

const Profile = () => {
  const [userdetail, setUserdetail] = useState({});

  const getuserdetails = async () => {
    var obj = {};
    obj["user_id"] = "158";
    var data = JSON.stringify(obj);

    fetch("http://192.168.1.100/nearfold_test/app/authentication/userDetails", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => {
        response.json().then((res) => {
          console.log("res", res);
          if (res.success === "yes") {
            setUserdetail(res.data);
            //   setadmin(true);
          }
        });
      })
      .catch((error) => error);
  };

  useEffect(() => {
    getuserdetails();
  }, []);

  return (
    <>
      <div className="haederdiv">
        <div className="header">
          <NavDropdown
            title="My Profile"
            id="basic-nav-dropdown"
            className="navop"
          >
            <NavDropdown.Item href="./My_Profile">
              <Button className="btns" variant="light" size="lg">
                My Profile
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="./Edit_ptofile">
              <Button className="btns" variant="light" size="lg">
                Edit Profile
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="./Change_location">
              <Button className="btns" variant="light" size="lg">
                Location Preferance
              </Button>{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="./Messages">
              <Button
                className="btns"
                variant="light"
                size="lg"
                onClick={() => {
                  window.location.href = "./Edit_ptofile";
                }}
              >
                Messages
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="./Messages">
              <Button
                className="btns"
                variant="light"
                size="lg"
                onClick={() => {
                  window.location.href = "./Edit_ptofile";
                }}
              >
                Purchase History
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="./Messages">
              <Button
                className="btns"
                variant="light"
                size="lg"
                onClick={() => {
                  window.location.href = "./Edit_ptofile";
                }}
              >
                Change Password
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="./Messages">
              <Button
                className="btns"
                variant="light"
                size="lg"
                onClick={() => {
                  window.location.href = "./Edit_ptofile";
                }}
              >
                Delete Your Account
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="./Messages">
              <Button
                className="btns"
                variant="light"
                size="lg"
                onClick={() => {
                  window.location.href = "./Edit_ptofile";
                }}
              >
                Log Out
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
          </NavDropdown>
        </div>
        <div
          className="headers"
          onClick={() => (window.location.href = "./my_favourites")}
        >
          Favourite
        </div>
        <div
          className="headers"
          onClick={() => (window.location.href = "./my_vehicles")}
        >
          My Vehicles
        </div>
      </div>
      <hr />
      <Map_cluster
        lat={22.2894694}
        lng={70.7730229}
        height="700px"
        width="100%"
        zoom={100}
        upprsection={{ display: "none" }}
        profile_pic={userdetail.profile_picture}
        markerlat={userdetail.latitude}
        markerlng={userdetail.longitude}
      />
      <footer className="footer">
        <div className="contactus">
          <a href="mailto:meetkhunt2301@gmail.com">Contact Us</a>
        </div>
        <div
          className="termsandconditions"
          onClick={() => {
            window.location.href = "./termsandconditions";
          }}
        >
          Terms and Conditions
        </div>
      </footer>
    </>
  );
};

export default Profile;
