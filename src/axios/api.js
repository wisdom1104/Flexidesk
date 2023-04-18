import axios from 'axios';
import { cookies } from '../shared/cookies';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 응답 인터셉터 설정
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalConfig = error.config;

    // 토큰이 만료되었을 때 새로운 토큰을 발급하는 역할
      const refreshToken = originalConfig.headers.Authorization;
      // token 값이 들어옴
      try {
        const data = await api.get('/users/refresh',{
          headers: {
            Authorization: refreshToken,
          },
        });
        console.log('data1',data);
        console.log('data2',data.data);

    // 새로운 토큰 발급 성공
        if (data) {
          cookies.set('token', data.data.token);
          cookies.set('refresh_token', data.data.refreshToken, { expires: 14 } )
    // 이전 요청을 재시도
          return await api.request(originalConfig);
        }
      } catch (e) {
        console.log('토큰 갱신 에러',e);
      }
  },
);

// 요청 인터셉터 설정
api.interceptors.request.use(config => {
    const token = cookies.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;
