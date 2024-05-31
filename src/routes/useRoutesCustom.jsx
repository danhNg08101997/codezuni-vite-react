import { useRoutes } from "react-router-dom";
import SignUpNew from "../pages/SignUpNew/SignUpNew";
import GetInfoRegister from "../pages/GetInfoRegister/GetInfoRegister";


function useRoutesCustom() {
  let element = useRoutes([
    {
        path: "/",
        element: <SignUpNew/>
    }
  ]);

  return element;
}

export default useRoutesCustom;
