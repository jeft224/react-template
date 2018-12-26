import request from "../libs/axios";
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  };

  return request({
    methods: "post",
    url: "/login",
    data
  });
}
