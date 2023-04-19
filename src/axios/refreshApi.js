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
    console.log('originalConfig',originalConfig);
    console.log('originalConfig-헤더',originalConfig.headers);

    try {
      const refreshToken = cookies.get('refresh_token');
      console.log('리프레쉬 토큰', refreshToken);

      // token 값이 들어옴
      const data = await api.get('/users/refresh', {
        headers: {
          Authorization: `${refreshToken}`
        }
      });

      // 새로운 토큰 발급 성공
      // if (data) {
      //   cookies.set('token', data.data.token);
      //   cookies.set('refresh_token', data.data.refreshToken, { expires: 14 } );

      //   // 이전 요청을 재시도
      //   return await api.request(originalConfig);
      // }
      
      const newInfo = data.headers["Authorization"];
      const newToken = newInfo.split(" ")[1];
      cookies.remove("token");
      cookies.set('token', newToken, { path: '/', maxAge: 3540 });

      return await api.request(originalConfig);

    } catch (e) {
      console.log('토큰 갱신 에러', e);
    }
    throw error;
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
