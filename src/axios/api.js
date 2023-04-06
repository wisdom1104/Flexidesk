import axios from 'axios';
import { cookies } from '../shared/cookies';

const api = axios.create({
  // baseURL:process.env.REACT_APP_SERVER_URL,
  // baseURL: 'http:/http://localhost:3000/users',
  // baseURL: 'process.env.REACT_APP_SERVER_URL',
  baseURL: 'http://13.209.66.183',
  // headers:{
  //   "Access-Control-Allow-Origin": "*",
  // },
  // timeout: 1,
});

api.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    const token = cookies.get('token');
    config.headers['authorization'] = `Bearer ${token}`;
    return config;
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
    // return error 가 아님 !! 꼭 프로미스.리젝트 여야만 함
  },
);

api.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response;
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
