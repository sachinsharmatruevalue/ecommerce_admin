import React from "react";
import { Link, useNavigate } from "react-router-dom";
// image
import logo from "../../images/logo-full.png";

const LockScreen = () => {
  const nav = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    nav("/dashboard");
  };
  return (
    <div className="authincation">
      <div className="container">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/dashboard">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Account Locked</h4>
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="form-group mb-3">
                        <label className="mb-2">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Unlock
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
