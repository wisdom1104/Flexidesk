import React, {useEffect} from 'react';
import { StSmallFont } from '../Welcome/WelcomeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';

function Management() {

    const { userList, isLoading, isError } = useSelector(state => state.userList);

    const dispatch = useDispatch();
    const navi = useNavigate();


    // useEffect(()=> {
    //     dispatch(__getAllManagement())
    // },[]);

      // token 유무에 따른 가드
  const token = cookies.get('token');
  // 관리자 가드
  const role = cookies.get('role');

  useEffect(() => {
    if (!token) {
      navi('/');
    } else if (role !== 'ADMIN') {
      navi('/');
    } else {
      dispatch(__getAllManagement());
    }
  }, []);

  return (
    <>
      <StSmallFont>사용자 관리</StSmallFont>

      <div
      style={{
        width:'50px',
        height: '100px',
        flexDirection:'column',
        display:'flex',
        gap:'10px',
      }}>
        <span>이메일</span>
        <span>이름</span>
        <span>권한</span>
        <span>권한 변경</span>
        <span>변경</span>
      </div>

      <div
            style={{
                display:'flex',
                flexDirection:'column',
                gap:'100px',
                marginTop: '-100px',
                marginLeft: '100px',
              }}
              >
        {
            userList.map(item => (
                <div key={item.allManagementId}>
                    <p>{item.email}</p> <br />
                    <p>{item.username}</p> <br />
                    <p>{item.role}</p> <br />
                    <select>
          <option>ADMIN</option>
          <option>MANAGER</option>
          <option>USER</option>
        </select>

        <button>직급 수정</button>
        <button>인원 삭제</button>
                </div>
            ))
        }


      </div>
    </>
  );
}

export default Management;