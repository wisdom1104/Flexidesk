import axios from 'axios';
import { cookies } from '../shared/cookies';

const api = axios.create({
    // baseURL: 'http:/http://localhost:3000/users',
    baseURL: process.env.REACT_APP_SERVER_URL,
    // headers:{
    //   "Access-Control-Allow-Origin": "*",
    // },
    // timeout: 1,
})


// api.interceptors.request.use(
//   // 요청을 보내기 전 수행되는 함수
//   function (config) {
//     const token = cookies.get("token")
//     config.headers["authorization"] = `Bearer ${token}`;
//     return config
//   },

//   // 오류 요청을 보내기 전 수행되는 함수
//   function (error) {
//     return Promise.reject(error)
//     // return error 가 아님 !! 꼭 프로미스.리젝트 여야만 함
//   }
// )

// api.interceptors.response.use(
//   // 응답을 내보내기 전 수행되는 함수
//   function (response) {
//     return response
//   },

//   // 오류 응답을 내보내기 전 수행되는 함수
//   function (error) {
//     return Promise.reject(error)
//   }
// )


api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          try {
            const { data } = await axios.post(
              'http://3.34.179.86/users/token',
              { token: refreshToken }
            );
            cookies.set('access_token', data.access_token, { path: '/' });
            originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
            return api(originalRequest);
          } catch (err) {
            console.error(err);
          }
        }
      }
  
      return Promise.reject(error);
    }
  );


export default api;
