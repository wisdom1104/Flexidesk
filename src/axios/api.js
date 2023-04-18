import axios from 'axios';
import { cookies } from '../shared/cookies';

const api = axios.create({
  // baseURL: 'http:/http://localhost:3000/users',
  baseURL: process.env.REACT_APP_SERVER_URL,
  // headers:{
  //   "Access-Control-Allow-Origin": "*",
  // },
  // timeout: 1,
});

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

// 응답 인터셉터 설정
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalConfig = error.config;
    console.log(originalConfig);
    console.log(originalConfig.headers);
    console.log('에러 찾기',error.response);

    // 토큰이 만료되었을 때 새로운 토큰을 발급하는 역할
    if (error.response && error.response.status === 401) {
      const refreshToken = originalConfig.headers['Refresh_Token'];
      try {
        const data = await api.get('/users/refresh',{
          headers: {
            Authorization: refreshToken,
          },
        });
        console.log('data1',data);

        if (data) {
          cookies.set('token', data.data.token);
          cookies.set('refresh_token', data.data.refreshToken, { expires: 14 } )

          console.log('data2',data);

          return await api.request(originalConfig);
        }
      } catch (e) {
        console.log('토큰 갱신 에러');
      }
    }
  },
);

// 요청 인터셉터 설정
api.interceptors.request.use(config => {
    const token = cookies.get("token");

    console.log('찍히나??',config.headers.Authorization);

    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = `${token}`;
    }
    return config;
  });

export default api;
