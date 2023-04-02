import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaPhone } from "react-icons/fa";
import "./LogIn.css";
import{ AuthContext } from "../../Contexts/UserInfoContext";
import { toast } from "react-toastify";

const LogIn = () => {
  //Error message state
  const [errorMessage, setErrorMessage] = useState("");
  //Succesfull Meassage state
  const [successfull, setSuccessfull] = useState(false);
  //geting data by using context
  const { login } = useContext(AuthContext);
  //use navigate and use location 
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  //handling the login
  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user =result.user;
        setSuccessfull(true);
        form.reset();
        if (user.emailVerified) {
          navigate(from, { replace: true });
          window.location.reload();
        }
        else{
           toast.error("Your email is not Verified.Please Verify Your Email");
        }
      })
      .catch((err) => {
        const errorCode = err.code;
        setErrorMessage(errorCode.slice(5).replace(/[-]/g, " "));
      });
  };

  return (
    <section className="login-form-style">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6 form-style">
            <div
              className="card shadow-2-strong bg-color"
              style={{ borderRadius: "1rem" }}
            >
              <form
                onSubmit={handleLogin}
                className="card-body p-5 text-center"
              >
                <h1 className="mb-5 text-info border-bottom">Sign in</h1>

                <div className="form-outline mb-4">
                  <label className="form-label">
                    <h5 className="">Email:</h5>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4 ">
                  <label className="form-label ">
                    <h5 className="">Password:</h5>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                  />
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label">Remember password</label>
                </div>
                <div className="text-start  my-3">
                  <Link>
                    <h6
                      style={{
                        textDecoration: "underline",
                        marginTop: "-10px",
                      }}
                      className="text-danger"
                    >
                      Forget Password
                    </h6>
                  </Link>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Login
                </button>

                {/* error Message show */}

                {errorMessage ? (
                  <>
                    <hr className="my-4 border-bottom" />
                    <p>
                      <h5 className="text-danger">{errorMessage}</h5>
                    </p>
                    <hr className="my-4 border-bottom" />
                  </>
                ) : (
                  ""
                )}
                {/* Succesfull Meassage show */}
                {successfull && (
                  <>
                    <hr className="my-4 border-bottom" />
                    <p>
                      <h5 className="text-success">Login successfully</h5>
                    </p>
                    <hr className="my-4 border-bottom" />
                  </>
                )}

                <hr className="my-4 border-bottom" />
                <p>
                  Don't have a Account Please{" "}
                  <Link to="/signup" className="text-danger text-underline">
                    Register
                  </Link>
                </p>
                <hr className="my-4 border-bottom" />

                <button
                  className="btn btn-lg btn-block btn-primary"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                >
                  <FaGoogle className="fab me-2"></FaGoogle>
                  Sign in with google
                </button>
                <button
                  className="btn btn-lg btn-block btn-primary mb-2"
                  style={{ backgroundColor: "#3b5998" }}
                  type="submit"
                >
                  <FaFacebook className="fab me-2"></FaFacebook>
                  Sign in with facebook
                </button>
                <Link to="/numberLogin">
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "seagreen" }}
                    type="submit"
                  >
                    <FaPhone className="fab me-2"></FaPhone>
                    Sign in with Number
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
