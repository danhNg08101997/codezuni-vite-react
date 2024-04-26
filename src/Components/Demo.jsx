import { useEffect } from "react";
import { https } from "../services/axios.config";

const Demo = () => {
  useEffect(() => {
    https.get("/api/Product").then((res) => {
      console.log(res);
    });
  }, []);

  return <div></div>;
};

export default Demo;
