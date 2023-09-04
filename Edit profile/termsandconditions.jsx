import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./termsandconditions.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import playstore from "../../assets/google-severs-music-studio-png-logo-21.png";
import applestore from "../../assets/154870.png";
import mobile from "../../assets/quartz-green-6.png";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import car from "../../assets/istockphoto-186578902-612x612.jpg";
import { GrPrevious, GrNext } from "react-icons/gr";
import gifts from "../../assets/3.png";
import people from "../../assets/62-629625_euclidean-vector-people-crowd-crowd-people-vector-png.png";
import advertisement from "../../assets/8-2-advertising-png.png";
import GPS from "../../assets/GPS.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import svg1 from "../../assets/svgviewer-output.svg";
import svg2 from "../../assets/svgviewer-output (1).svg";
import svg3 from "../../assets/svgviewer-output (2).svg";
import svg4 from "../../assets/svgviewer-output (3).svg";

const Termsandconditions = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const VideoModal = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          paddingTop: "210px",
          zIndex: 10,
        }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/3QbuYL8b68Y?autoplay=none"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <AiOutlineClose
          className="closeiframe"
          onClick={() => {
            setShown(false);
          }}
        />
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="termsandconditionsheader">
          {window.location.pathname == "/termsandconditions" ? (
            <>
              <div className="mainheader">
                <div className="haederdiv">
                  <h1>NEARFOLD</h1>
                  <div className="headers">Home</div>

                  <div className="headers">
                    <NavDropdown
                      title="App"
                      id="basic-nav-dropdown"
                      className="navop"
                    >
                      <NavDropdown.Item href="/Edit_ptofile">
                        {" "}
                        <Button className="btns" variant="light" size="lg">
                          Features
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Change_location">
                        <Button className="btns" variant="light" size="lg">
                          App Screens
                        </Button>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="headers">
                    <NavDropdown
                      title="Company"
                      id="basic-nav-dropdown"
                      className="navop"
                    >
                      <NavDropdown.Item href="/Edit_ptofile">
                        {" "}
                        <Button className="btns" variant="light" size="lg">
                          About Us
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Change_location">
                        <Button className="btns" variant="light" size="lg">
                          Terms of use
                        </Button>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Change_location">
                        <Button className="btns" variant="light" size="lg">
                          Privacy Policy
                        </Button>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="headers">
                    <NavDropdown
                      title="Support"
                      id="basic-nav-dropdown"
                      className="navop"
                    >
                      <NavDropdown.Item href="/Edit_ptofile">
                        {" "}
                        <Button className="btns" variant="light" size="lg">
                          Help
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Change_location">
                        <Button className="btns" variant="light" size="lg">
                          Contact Us
                        </Button>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="headers">
                    <NavDropdown
                      title="Languages"
                      id="basic-nav-dropdown"
                      className="navop"
                    >
                      <NavDropdown.Item href="/Edit_ptofile">
                        {" "}
                        <Button className="btns" variant="light" size="lg">
                          English
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Change_location">
                        <Button className="btns" variant="light" size="lg">
                          Gujarati
                        </Button>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mainheader">
                <div className="haederdiv">
                  <div className="headers">
                    <NavDropdown
                      title="My Profile"
                      id="basic-nav-dropdown"
                      className="navop"
                    >
                      <NavDropdown.Item href="/Edit_ptofile">
                        {" "}
                        <Button className="btns" variant="light" size="lg">
                          Edit Profile
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Change_location">
                        <Button className="btns" variant="light" size="lg">
                          Change Location
                        </Button>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Messages">
                        <Button
                          className="btns"
                          variant="light"
                          size="lg"
                          onClick={() => {
                            window.location.href = "/Edit_ptofile";
                          }}
                        >
                          Messages
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Messages">
                        <Button
                          className="btns"
                          variant="light"
                          size="lg"
                          onClick={() => {
                            window.location.href = "/Edit_ptofile";
                          }}
                        >
                          Purchase History
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/ChangePassword">
                        <Button
                          className="btns"
                          variant="light"
                          size="lg"
                          onClick={() => {
                            window.location.href = "/ChangePassword";
                          }}
                        >
                          Change Password
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/tearmsandcondition">
                        <Button
                          className="btns"
                          variant="light"
                          size="lg"
                          onClick={() => {
                            window.location.href = "/tearmsandcondition";
                          }}
                        >
                          Terms & Condition
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
                          Contact Us
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
                      <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="headers">Favourite</div>
                  <div className="headers">My Vehicles</div>
                </div>
                <div className="logout">Logout</div>
              </div>
              <hr />
            </>
          )}
        </div>
        <div className="termsandconditionscontent">
          <div className="sec-1">
            <h1>NearFold is your best vicinity explorer</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              nesciunt natus facere esse molestiae aspernatur odit praesentium.
              Ducimus, veniam odit doloremque repudiandae cum magni, ab nemo
              dolores repellat culpa ipsum temporibus? Nemo porro ex amet
              deserunt, asperiores expedita est consequuntur vel minus sint
              repellendus impedit. Labore voluptate dolores, voluptatum eaque
              reiciendis repellendus voluptates soluta quae dolore est!
              Assumenda maxime, non similique, vitae accusantium corporis
              aperiam suscipit distinctio velit illo voluptatibus culpa. Neque
              optio laboriosam voluptates?
            </p>
          </div>
        </div>
        <div className="polygon"></div>
        <div className="downloads">
          <div className="downloadsdivplay">
            <img src={playstore} className="downloadsicons" />
            <h3>Playstore</h3>
          </div>
          <div className="downloadsdivapp">
            <img src={applestore} className="downloadsicons" />
            <h3>Appstore</h3>
          </div>
        </div>
        <div className="mobile">
          <img
            src="https://nearfold.com/assets/img/banner/mockup.png"
            alt="mobileimg"
            className="mobileanimated c1"
          />
        </div>
        <div className="appfeature">
          <h1>App Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quam
            consequuntur aliquam, odit eaque explicabo sit ipsa blanditiis
            labore nisi veritatis, perspiciatis harum placeat culpa commodi
            aperiam tempora laborum ratione. Beatae recusandae modi vero,
            incidunt eveniet quasi, sint magni distinctio sapiente neque rerum
            voluptate blanditiis velit. Quibusdam expedita iste fugiat
            reprehenderit. Enim autem similique, labore, ad assumenda eaque,
            ipsum corrupti maxime excepturi magni eveniet laudantium animi
            aliquid distinctio perspiciatis molestiae adipisci numquam sapiente
            molestias aut incidunt recusandae voluptas. Cumque, ab commodi atque
            autem numquam nisi, tempora corporis sint id voluptatum eligendi
            ducimus vel voluptatem voluptas. Et ex nulla blanditiis laboriosam,
            natus eaque dolorem laudantium! Voluptatibus alias expedita,
            exercitationem laborum accusamus iusto tempora labore ab nisi
            debitis repellendus ipsa veritatis quidem animi dolore excepturi non
            modi architecto perspiciatis mollitia? Modi aliquid possimus at
            harum laboriosam perferendis blanditiis magnam quibusdam
            reprehenderit beatae provident molestias labore debitis dolore
            dolorum, voluptates dolores culpa explicabo.
          </p>
        </div>
        <div className="crousel">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img src={svg3} class="d-block carimg" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Online/Offline Listings</h5>
                  <p>
                    Any users who have listed their cars can either be seen with
                    their online or offline status
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={svg4} class="d-block carimg" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Your Ads Move with you</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={svg1} class="d-block carimg" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Interact with Buyers & Sellers</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={svg2} class="d-block carimg" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Future Features</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
              style={{ color: "orange" }}
            >
              <GrPrevious className="controlpn" />
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
              style={{ color: "orange" }}
            >
              <GrNext className="controlpn" />
              {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
              {/* <span class="visually-hidden">Next</span> */}
            </button>
          </div>
        </div>
        <div className="dealfinalize">
          <div className="dealtext">
            <h2>Interact with other users to finalize your deal</h2>
            <h5>
              When you find your ideal car on the map near you,you can send the
              seller a message withing Website
            </h5>
            <div className="getstarrted">Get Started</div>
          </div>
          <div className="gifts">
            <img src={gifts} className="giftsimg" />
          </div>
        </div>
        <div className="advertisement">
          <div className="gps">
            <img src={GPS} className="gpsimage" />
          </div>
          <div className="adtext">
            <h2>Online/Offline Advertisement Status</h2>
            <h5>
              If you would like your advertisement to be shown to others of the
              application with Live tracking you have to click on Go Live button
              inside our App
            </h5>
            <div className="getstarrted">Get Started</div>
          </div>
        </div>
        <div className="youtubevieo">
          <div>{shown ? <VideoModal /> : null}</div>
          <a onClick={() => setShown(!shown)} className="pulse">
            <span></span>
            <span></span>
            <span></span>
            <BsFillPlayFill className="playbtn" />
          </a>
        </div>
      </div>
      <div className="arrowup">
        <a href="#">
          <AiOutlineArrowUp className="arrowsvg" />
        </a>
      </div>
    </>
  );
};

export default Termsandconditions;
