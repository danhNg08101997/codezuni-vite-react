import { useRoutes } from "react-router-dom";
import SignUpNew from "../pages/SignUpNew";

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
