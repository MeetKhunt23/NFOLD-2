import React from 'react'

const file = () => {
  return (
    <div>
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
              class="active controlbtn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              class="controlbtn"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              class="controlbtn"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              class="controlbtn"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src={mobile} class="d-block carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Online/Offline Listings</h5>
                <p>
                  Any users who have listed their cars can either be seen with their online or offline status
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={mobile} class="d-block carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Your Ads Move with you</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={mobile} class="d-block carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Interact with Buyers & Sellers</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={mobile} class="d-block carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Future Features</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default file
