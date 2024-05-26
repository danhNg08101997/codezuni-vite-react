import React from "react";
import welcomeImage from "../assets/img/welcome-to-monday.avif";
import ButtonGoogle from "../Components/Button/ButtonGoogle";
import InputCustom from "../Components/Input/InputCustom";
import ButtonCustom from "../Components/Button/ButtonCustom";

const SignUpNew = () => {
  return (
    <div className="h-screen flex">
      {/* Content */}
      <div className="content_signup w-7/12 bg-orange-700">
        {/* title */}
        <h1>Welcome to monday.com</h1>
        {/* sub-title */}
        <p>Get started - it's free. No credit card needed.</p>
        {/* button Google */}
        <ButtonGoogle />
        {/* ---or--- */}
        <div className="line-cross"></div>
        <span>Or</span>
        <div className="line-cross"></div>
        {/* input */}
        <InputCustom placeholder={"name@company.com"} />
        {/* button continue */}
        <ButtonCustom content="Continue" />
        {/* text */}
        <p>
          By proceeding, you agree to the <br />
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>
        {/* navigation log in */}
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
      {/* ----------------------------- */}

      {/* Image */}
      <div className="image_signup w-5/12 bg-pink-500">
        <img src={welcomeImage} alt="Welcome Monday Image" />
      </div>
      {/* ----------------------------- */}
    </div>
  );
};

export default SignUpNew;
