import axios from "axios";

export const https = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
});

https.interceptors.request.use(
  (config) => {
    //Đây là nơi giúp chỉnh sửa thêm hoặc đổi dữ liệu trước khi gửi lên BE
    return {
      ...config,
      headers: {
        Authorization: "Bearer" + "",
      },
    };
  },
  (error) => {
    //Khi có lỗi sẽ vào đây
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response) => {
    const {data} = response
    return data
  },
  (error) => {
    return Promise.reject(error);
  }
);
