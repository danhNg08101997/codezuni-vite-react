import React from "react";
import logoGoogle from "../../assets/img/7123025_logo_google_g_icon.svg";

const ButtonGoogle = () => {
  return (
    <button>
      <img width="48" height="48" src={logoGoogle} alt="Google Logo" />
      Continue with Google
    </button>
  );
};

export default ButtonGoogle;
