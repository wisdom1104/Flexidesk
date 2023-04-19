import axios from 'axios';
import { cookies } from '../shared/cookies';

const api = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: 'http://54.180.152.100',
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
  const originalConfig = error.config;

  if(error.response.data.statusCode === 401 && ! originalConfig._retry) {
    originalConfig._retry = true;

    try {
    const refreshToken = cookies.get('refresh_token');
    console.log('refreshToken---->',refreshToken);

    const data = await axios.get('http://54.180.152.100/users/refresh', {
      headers: {
        "refresh_token": `Bearer ${refreshToken}`,
      },
    });
    console.log('data------>',data);

    const newToken = data.headers["authorization"].split(" ")[1];
    console.log('newToken',newToken);
    
    // cookies.remove("token",{path: "/"});
    cookies.set("token", newToken, {path: "/"} );
    
    return await api.request(originalConfig);
  } catch (error) {
    console.log('error->>>>>>>>>>',error);
  }
  return Promise.reject(error); 
  }
  }
)

export default api;
