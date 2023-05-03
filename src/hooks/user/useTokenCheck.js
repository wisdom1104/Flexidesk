import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../shared/cookies';

function useTokenCheck() {
    const navi = useNavigate();
    useEffect(()=> {
        const token = getCookie("token");
        if(token) {
            navi('/')
        }
    },[])
  return ;
}
export default useTokenCheck