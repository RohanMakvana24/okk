import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { LoginValidation } from "../../validations/auth/authValidation";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const SignIn = () => {
  // `` << Handle Login Form Using Formik >> ``
  const LoginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: LoginValidation,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
            <div className="d-flex justify-content-between align-items-center mb-4 flex-nowrap w-100">
              <div className="form-check d-flex align-items-center mb-0">
                <input
                  checked
                  className="form-check-input"
                  id="remember"
                  type="checkbox"
                />
                <label
                  className="form-check-label ms-2 remember-label"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>
              <NavLink className="forgot-link ms-3" to="/auth/forgot-password">
                Forgot your password ?
              </NavLink>
            </div>
            <button className="btn btn-login w-100" type="submit">
              Log In
            </button>
          </form>
          <div className="divider">
            <span>Or, Login with</span>
          </div>
          <button className="btn-google w-100" type="button">
            <img
              alt="Google logo"
              src="https://storage.googleapis.com/a1aa/image/063fa413-0756-40fe-8b57-a3c5c4832100.jpg"
            />
            Sign up with Google
          </button>
          <p className="register-text">
            Don’t have an account ?{" "}
            <NavLink className="register-link" to="/auth/signup">
              Register here
            </NavLink>
          </p>
        </section>
        <section className="image-section">
          <img
            src="https://img.freepik.com/premium-psd/man-with-blue-shirt-book-his-shoulder_920413-2663.jpg?w=996"
            alt="Woman using laptop"
          />
        </section>
      </main>
    </>
  );
};

export default SignIn;
