import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Importing the CSS for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="background-image"></div>

      <div className="hero-section">
        <h1
          class="display-1"
          style={{
            color: "white",
            fontSize: "4rem",
            fontFamily: "Goudy Old Style",
          }}
        >
          WELCOME
        </h1>
        <h1
          class="display-4"
          style={{
            color: "white",

            fontFamily: "Goudy Old Style",
          }}
        >
          TO
        </h1>

        <h1
          class="display-5"
          style={{
            color: "white",
            fontFamily: "Goudy Old Style",
          }}
        >
          OUR LIBRARY MANAGEMENT SYSTEM
        </h1>

        <div className="container mt-5">
          <div className="row d-flex align-items-center justify-content-center">
            {/* Left Card */}
            <div className="col-md-4">
              <div className="p-3 shadow custom-card d-flex flex-column align-items-center justify-content-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                  <h3
                    className="card-title text-center fw-bold"
                    style={{ color: "#180849" }}
                  >
                    Explore Books
                  </h3>
                  <p
                    className="card-text larger-text"
                    style={{ color: "#2C2C2E" }}
                  >
                    Check out all the books available in our library
                  </p>
                  <button className="btn btn-primary mt-3">
                    Explore Books
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="col-md-2 d-flex justify-content-center">
              <div className="custom-divider"></div>
            </div>

            {/* Right Card */}
            <div className="col-md-4">
              <div className="p-3 shadow custom-card d-flex flex-column align-items-center justify-content-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                  <h3
                    className="card-title text-center fw-bold"
                    style={{ color: "#180849" }}
                  >
                    Borrow Books
                  </h3>
                  <p
                    className="card-text larger-text"
                    style={{ color: "#2C2C2E" }}
                  >
                    Borrow books and check for current borrowers and
                    availability
                  </p>
                  <Link to="/books">
                    <button className="btn btn-primary mt-3">
                      Visit Section
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
