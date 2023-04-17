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

    if (error.response && error.response.status === 401) {
      const refreshToken = originalConfig.headers['Refresh_Token'];
      try {
        const data = await axios({
          url: '/users/refresh',
          method: 'GET',
          headers: {
            authorization: refreshToken,
          },
        });
        console.log('data1',data);

        if (data) {
          console.log('data2',data);
          console.log('data2',data.data);
          cookies.set('token', data.data.token, {expires: 7});
          cookies.set('refresh_token', data.data.refreshToken, { expires: 14 } )
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
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;
