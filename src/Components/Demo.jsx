import { useEffect } from "react";
import { https } from "../services/axios.config";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Demo = () => {
  // useEffect(() => {
  //   https.get("/api/Product").then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: {
      hoTen:'',
    },
    onSubmit: (values) => {
      alert(values.hoTen)
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required("Vui lòng đừng bỏ trống")
    })
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Họ tên</label>
          <input
            onChange={handleChange}
            type="text"
            name="hoTen"
            id
            aria-describedby="helpId"
            placeholder="Vui lòng nhập tên"
            className="border border-black p-2 rounded"
          />
          <small id="helpId" className="text-red-500">{errors.hoTen}</small>
        </div>
        <div>
          <button type="submit" className="py-2 px-5 rounded bg-black text-white">
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
