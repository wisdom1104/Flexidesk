import axios from 'axios';
import { cookies } from '../shared/cookies';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    const originalConfig = error.config;
    console.log(originalConfig);

    if (error.response.data.statusCode === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      console.log();

      // try {
      //   const refreshToken = cookies.get('refresh_token');

      //   const data = await api.get('users/refresh', {
      //     headers: {
      //       refresh_token: `Bearer ${refreshToken}`,
      //     },
      //   });
      //   const newToken = data.headers['authorization'].split(' ')[1];

      //   cookies.set('token', newToken, { path: '/', expires: 14 });

      //   return await api.request(originalConfig);
      // } catch (error) {
      //   console.log(error);
      // }
    }
    return Promise.reject(error);
  },
);

export default api;
