import { useRoutes } from "react-router-dom";
import {DatePicker} from 'antd'
import Demo from "../Components/Demo";

function useRoutesCustom() {
  let element = useRoutes([
    {
      path: "/home",
      element: <div><DatePicker /></div>,
    },
    {
        path: "/demo",
        element: <Demo/>
    }
  ]);

  return element;
}

export default useRoutesCustom;
