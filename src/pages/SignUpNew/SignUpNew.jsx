import React from "react";
import welcomeImage from "../../assets/img/welcome-to-monday.avif";
import ButtonCustom from "../../Components/Button/ButtonCustom";
import ButtonGoogle from "../../Components/Button/ButtonGoogle";
import InputCustom from "../../Components/Input/InputCustom";

const SignUpNew = () => {
  return (
    <div className="h-screen flex ">
      {/* Content */}
      <div className="content_signup w-7/12 flex flex-col items-center">
        <div className="flex flex-col flex-1 justify-center">
          <div className="block text-center">
            {/* title */}
            <h1 className="text-4xl font-semibold mb-2">
              Welcome to monday.com
            </h1>
            {/* sub-title */}
            <p className="text-base font-normal mb-12">
              Get started - it's free. No credit card needed.
            </p>
          </div>
          <div className="text-center" style={{ width: "400px" }}>
            {/* button Google */}
            <ButtonGoogle />
            {/* ---or--- */}
            <div className="my-4 grid gap-2 auto-cols-auto w-full">
              <div className="line-cross"></div>
              <span>Or</span>
              <div className="line-cross"></div>
            </div>
            {/* input */}
            <InputCustom placeholder={"name@company.com"} />
            {/* button continue */}
            <ButtonCustom content="Continue" />
            {/* text */}
            <p className="mt-4">
              By proceeding, you agree to the <br />
              <a href="#" className="text-blue-600 font-medium">Terms of Service</a> and{" "}
              <a href="#" className="text-blue-600 font-medium">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-16">
          {/* navigation log in */}
          <p>
            Already have an account? <a href="#" className="text-blue-600 font-medium">Log in</a>
          </p>
        </div>
      </div>
      {/* ----------------------------- */}

      {/* Image */}
      <div className="image_signup w-5/12">
        <img
          src={welcomeImage}
          alt="Welcome Monday Image"
          className="w-full h-full"
        />
      </div>
      {/* ----------------------------- */}
    </div>
  );
};

export default SignUpNew;
