import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import useTokenCheck from './useTokenCheck';

export const useSignUpSubmitHandler=(auth)=> {
  useTokenCheck();
  
  const navi = useNavigate();

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post(`/users/signup/${auth.type}`, auth);
      alert(`${auth.username}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };
  return {onSubmitHandler}
}