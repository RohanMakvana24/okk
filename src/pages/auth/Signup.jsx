import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../../../public/assets/css/auth/auth.css";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <main className="login-container">
        <section className="form-section">
          <div className="logo-wrapper mb-5 text-center text-md-start">
            <img
              alt="Learnix Logo"
              className="logo-full"
              src="/assets/img/logo/learnix.png"
            />
          </div>

          <h1>Welcome back!</h1>
          <p className="subtitle">
            Enter to get unlimited access to data & information.
          </p>
          <form>
            <div className="mb-4">
              <label className="form-label" htmlFor="fullname">
                FullName <span className="text-danger">*</span>
              </label>
              <input
                className="form-control w-100"
                id="fullname"
                type="text"
                placeholder="Enter your fullname"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <input
                className="form-control w-100"
                id="email"
                type="email"
                placeholder="Enter your mail address"
                required
              />
            </div>
            <div className="mb-4 position-relative">
              <label className="form-label" htmlFor="password">
                Password <span className="text-danger">*</span>
              </label>
              <input
                className="form-control w-100"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <button
                aria-label="Toggle password visibility"
                className="password-toggle"
                type="button"
                onClick={togglePassword}
              >
                <FontAwesomeIcon
                  style={{
                    marginTop: "32px",
                  }}
                  icon={showPassword ? faEye : faEyeSlash}
                />
              </button>
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="avatars">
                Avatar <span className="text-danger">*</span>
              </label>
              <input
                className="form-control w-100"
                id="avatar"
                type="file"
                required
              />
            </div>

            <button className="btn btn-login w-100" type="submit">
              SignUp
            </button>
          </form>
          <p className="register-text">
            Already have an account? {""}
            <NavLink className="register-link" to="/auth/signin">
              Login here
            </NavLink>
          </p>
        </section>
        <section className="image-section">
          <img
            src="https://img.freepik.com/premium-psd/woman-is-holding-book-with-yellow-background_920413-2665.jpg?w=996"
            alt="Woman using laptop"
          />
        </section>
      </main>
    </>
  );
};

export default SignUp;
