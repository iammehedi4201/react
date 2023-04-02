import React from "react";
import "./BookingProcess.css";

const BookingProcess = () => {
  return (
    <div>
      <section
        className="booking-process-dsection"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card booking-card-sizing">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue Booking
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Booking cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* booking product one  */}

                      <div className="card booking-card-sizing mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  className="img-fluid img-1 rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "100%" }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* booking product two  */}

                      <div className="card booking-card-sizing mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                  className="img-fluid img-2 rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Samsung galaxy Note 10 </h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "100%" }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* booking product three  */}
                      <div className="card booking-card-sizing mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                  className="img-fluid img-3 rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Samsung galaxy Note 10 </h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "100%" }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* booking Payment form  */}

                    <div className="col-lg-5">
                      <div className="card booking-card-sizing bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              className="img-fluid  rounded-3"
                              alt="Avatar"
                            />
                          </div>

                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x"></i>
                          </a>

                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label" for="typeName">
                                Cardholder's Name
                              </label>
                            </div>

                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="1234 5678 9012 3457"
                                minlength="19"
                                maxlength="19"
                              />
                              <label className="form-label" for="typeText">
                                Card Number
                              </label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                    minlength="7"
                                    maxlength="7"
                                  />
                                  <label className="form-label" for="typeExp">
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                    minlength="3"
                                    maxlength="3"
                                  />
                                  <label className="form-label" for="typeText">
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              <span>$4818.00</span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Booking form */}
                <div className="row">
                  <section className="booking-form-section col-12 mx-auto">
                    <div className="text-center my-5">
                      <h1 style={{ color: "tomato" }}>BOOKING INFORMATION</h1>
                      <hr style={{ width: "50%", margin: "0px auto" }} />
                    </div>

                    <form>
                      <div className="row">
                        <div className="col-sm-6 ">
                          <div className="form-group">
                            <span className="form-label">Name</span>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <span className="form-label">Email</span>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-2">
                        <span className="form-label">Phone</span>
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="form-group mt-2">
                        <span className="form-label">Pickup Location</span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter ZIP/Location"
                        />
                      </div>
                      <div className="form-group mt-2">
                        <span className="form-label">Destination</span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter ZIP/Location"
                        />
                      </div>
                      <div className="row">
                        <div className="col-sm-5">
                          <div className="form-group mt-2">
                            <span className="form-label">Pickup Date</span>
                            <input
                              className="form-control"
                              type="date"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-7">
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="form-group mt-2">
                                <span className="form-label">Hour</span>
                                <select className="form-control">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                </select>
                                <span className="select-arrow"></span>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group mt-2">
                                <span className="form-label">Min</span>
                                <select className="form-control">
                                  <option>05</option>
                                  <option>10</option>
                                  <option>15</option>
                                  <option>20</option>
                                  <option>25</option>
                                  <option>30</option>
                                  <option>35</option>
                                  <option>40</option>
                                  <option>45</option>
                                  <option>50</option>
                                  <option>55</option>
                                </select>
                                <span className="select-arrow"></span>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group mt-2">
                                <span className="form-label">AM/PM</span>
                                <select className="form-control">
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                                <span className="select-arrow"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-btn">
                        <div className="d-grid mt-3">
                          <button className="submit-btn btn btn-success">
                            Find Car
                          </button>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingProcess;
