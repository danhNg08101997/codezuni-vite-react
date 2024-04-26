import { useRoutes } from "react-router-dom";
import {DatePicker} from 'antd'
import Demo from "../Components/Demo";

function useRoutesCustom() {
  let element = useRoutes([
    {
        path: "/",
        element: <Demo/>
    }
  ]);

  return element;
}

export default useRoutesCustom;
