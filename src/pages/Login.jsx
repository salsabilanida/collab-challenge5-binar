// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "../style/landingPage.css";
import "../style/login_register.css";
import GoogleOAuth from "../components/GoogleOAuth";

const Login = () => {
    return (
      <div className="register">
        <div className="offset-lg-3 col-lg-6">
          <form className="container">
            <div className="card">
              <div className="card-header">
                
              </div>
              <div className="card-body">
                
              </div>
              <div className="card-footer  space-between">
                <label>or</label>{" "}
                <label>
                    <GoogleOAuth buttonText="Login with Google" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;