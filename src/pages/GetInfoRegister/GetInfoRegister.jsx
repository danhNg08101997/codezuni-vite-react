import React from "react";
import registerImage from "../../assets/img/set-up-your-account.avif";
import mondayLogo from "../../assets/img/logo-full-big.png";
import InputCustom from "../../Components/Input/InputCustom";

const GetInfoRegister = () => {
  return (
    <div className="h-screen flex">
      <div className="infor_register_content w-7/12">
        {/* logo */}
        <div>
          <img src={mondayLogo} alt="Monday Logo" />
        </div>
        {/* input */}
        <div>
          <h1>Create your account</h1>
          <InputCustom placeholder={"Enter your full name"} />
          <InputCustom placeholder={"Enter at least 8 characters"} />
          <InputCustom
            placeholder={"For example, company's or department's name"}
          />
        </div>
        {/* action redirect */}
        <button>Continue</button>
      </div>
      <div className="infor_register_image w-5/12">
        <img
          src={registerImage}
          alt="Welcome Register Image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default GetInfoRegister;
