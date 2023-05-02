import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import api from '../axios/api';
import { cookies, setCookie } from '../shared/cookies';
import useTrue from '../hooks/user/useTrue';

export const LoginSubmitHandler = (login, setErrorMsg) => {
  useTrue();

  const navi = useNavigate();

  const onsubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', login);
      const token = response.headers.authorization;
      const payload = jwt_decode(token);

      cookies.set('token', token.split(' ')[1], { path: '/', maxAge: 3540 });
      cookies.set('userId', payload.userId, { path: '/', maxAge: 3540 });
      cookies.set('companyName', String(payload.companyName), {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('username', String(payload.username), {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('role', payload.role, { path: '/', maxAge: 3540 });
      navi('/adminspace');
    } catch (error) {
      const errorMessage = error.response.data.message;
      setErrorMsg(errorMessage);
      return errorMessage;
    }
  };
  return { onsubmitHandler };
};
