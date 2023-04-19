import axios from 'axios';
import { cookies, getCookie, removeCookie } from '../shared/cookies';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
  const originalConfig = error.config;
  try {
    const refreshToken = getCookie("refreshToken");
    const expire = getCookie("expire");
    console.log('refreshToken->>>>>>>>>>',refreshToken);
    console.log('expire->>>>>>>>>>',expire);


    const data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/refresh`, {
      headers: {
        "Refresh-Token": refreshToken,
        "Access-Token-Expire": expire,
      },
    });
    console.log('data->>>>>>>>>>',data);

    const newInfo = data.headers["authorization"];
    const newToken = newInfo.split(" ")[1];
    cookies.remove("token",{path: "/"});
    cookies.set("token", newToken, {path: "/"} )

    return await api.request(originalConfig);

  } catch (e) {
    console.log(e);
  }
  }
)


export default api;
