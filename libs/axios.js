import axios from "axios";
import { message } from "antd";

const Axios = axios.create({
  baseURL: "",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});
// Axios.interceptors.request.use(config => {

// },error => {

// })

Axios.interceptors.response.use(
  response => {
    if (response.data == undefined) {
      data = response.request.responseText;
    } else {
      data = response.data;
    }
    return data;
  },
  error => {
    if (error && error.response) {
      return Promise.reject(error);
    }
  }
);

const request = (method, url, params) => {
  return new Promise((resolve, reject) => {
    Axios({ method, url, params }).then(
      response => {
        resolve(response.data);
      },
      err => reject(err)
    );
  }).catch(err => {
    reject(err);
  });
};

export default request;
