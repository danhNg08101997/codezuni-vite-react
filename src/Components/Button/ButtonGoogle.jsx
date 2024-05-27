import React from "react";
import logoGoogle from "../../assets/img/7123025_logo_google_g_icon.svg";

const ButtonGoogle = () => {
  return (
    <button className="flex items-center border border-gray-400 py-2 px-5 rounded hover:bg-gray-300 duration-500 space-x-1 w-full justify-center">
      <img width="25" height="25" src={logoGoogle} alt="Google Logo" />
      <span>Continue with Google</span>
    </button>
  );
};

export default ButtonGoogle;
