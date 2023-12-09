// 对axios作一些配置
import store from "@/store";
import axios from "axios";
import axiosRetry from "axios-retry";
// axios.create返回值是一个新的axios的实例
const request = axios.create({
  baseURL: "http://111.229.247.11:3000/",
  // baseURL: "http://localhost:3000",
  timeout: 3000,
  withCredentials: true, //跨域携带cookie
});
axiosRetry(request, { retries: 3 });

request.interceptors.request.use((config) => {
  //config是每一次发起请求的详细配置
  // 在这个位置可以对请求配置作更改
  const cookie = store.state.auth.cookie
  if (cookie) {
    if (config.method == "post") {
      config.data || (config.data = {});
      config.data.cookie = cookie;
    }
    if (config.method == "get") {
      config.params || (config.params = {});
      config.params.cookie = cookie;
    }
  }

  return config;
});
export default request;
