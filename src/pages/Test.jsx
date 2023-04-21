// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { isLoginActions } from '../redux/modules/loginSlice';
// import { cookies } from '../shared/cookies';
// import {
//   HeaderContain,
//   StHeaderButtonBox,
//   StHeaderContentBox,
//   StHeaderContentButtonBox,
//   StHeaderButton,
//   StHeaderLogo,
//   StHaderFont,
// } from './HeaderStyled';

// import {
//   MoveModal,
//   MoveModalBackground,
//   MoveModalSubTitle,
//   MoveModalSubbtn,
//   MoveModalTitle,
//   MoveModalbtn,
// } from '../features/space/SpaceStyles';

// function Header() {
// // test /////////////////////////////////////////////////////////////////
// const [loginTime, setLoginTime] = useState(Date.now());
//   const [expirationTime, setExpirationTime] = useState(loginTime + 1800000); // 토큰 만료 시간은 로그인 시간으로부터 30분 후로 설정한 예시입니다.
//   const [showModal, setShowModal] = useState(false);
//   //////////////////////////////////////////////////////////////////////////

//   const dispatch = useDispatch();
//   const navi = useNavigate();

//   const userName = cookies.get('username');
//   const userId = cookies.get('userId');

//   const logout = () => {
//     dispatch(isLoginActions.logout());
//     setLoginTime(null);
//     setExpirationTime(null);
//     navi('/');
//   };

//   const onClcikHandelr = () => {
//     navi('/');
//   };
// // test /////////////////////////////////////////////////////////////////
//   useEffect(
//     () => {
//       const timerId = setInterval(() => {
//         if (expirationTime && Date.now() > expirationTime) {
//           logout();
//         }
//       }, 1000);

//       return () => clearInterval(timerId);
//     },
//     [expirationTime],
//     // [expirationTime,logout]
//   );

//   // const handleLogout = () => {
//   //   setShowModal(true);
//   // };

//   // const handleModalCancel  = () => {
//   //   setShowModal(false);
//   // };

//   // const handleModalOk = () => {
//   //   setShowModal(false);
//   //   dispatch(isLoginActions.logout());
//   //   setLoginTime(null);
//   //   setExpirationTime(null);
//   //   navi('/');
//   // };


//   //////////////////////////////////////////////////////////////////////////

//   const location = useLocation();

//   if (
//     location.pathname === '/login' ||
//     location.pathname === '/signup' ||
//     location.pathname === '/signupuser'
//   ) {
//     return null;
//   }

//   return (
//     <StHeader>
//       {cookies.get('token') ? (
//         <HeaderContain>
//           <StHeaderContentBox>
//             <StHeaderLogo
//               src="img/Logo.png"
//               alt="logo"
//               onClick={onClcikHandelr}
//             />
//           </StHeaderContentBox>
//           <StHeaderButtonBox>
//             <StHeaderContentBox onClick={() => navi(`/space`)}>
//               <StHaderFont>스페이스</StHaderFont>
//             </StHeaderContentBox>
//             <StHeaderContentBox
//               onClick={() => navi(`/schedulescalendar/${userId}`)}
//             >
//               <StHaderFont>스케줄 등록</StHaderFont>
//             </StHeaderContentBox>
//             <StHeaderContentBox
//               onClick={() => navi(`/scheduledetail/${userId}`)}
//             >
//               <StHaderFont>스케줄 조회</StHaderFont>
//             </StHeaderContentBox>
//             <StHeaderContentBox onClick={() => navi(`/detail/${userId}`)}>
//               <StHaderFont>회의실 예약현황</StHaderFont>
//             </StHeaderContentBox>
//             <StHeaderContentBox>
//               <StHaderFont>{`${userName}님 환영합니다`}</StHaderFont>
//             </StHeaderContentBox>
//             <StHeaderContentButtonBox>
//               <StHeaderButton type="button" onClick={logout}>
//                 Logout
//               </StHeaderButton>

//             </StHeaderContentButtonBox>
//           </StHeaderButtonBox>
//         </HeaderContain>
//       ) : (
//         <HeaderContain>
//           <StHeaderContentBox>
//             <StHeaderLogo
//               src="img/Logo.png"
//               alt="logo"
//               onClick={onClcikHandelr}
//             />
//           </StHeaderContentBox>
//           <StHeaderContentBox>
//             <StHeaderContentBox onClick={() => navi(`/`)}>
//               <StHaderFont>서비스 소개</StHaderFont>
//             </StHeaderContentBox>
//             <StHeaderContentButtonBox>
//               <StHeaderButton type="button" onClick={() => navi('/login')}>
//                 LogIn
//               </StHeaderButton>
//             </StHeaderContentButtonBox>
//           </StHeaderContentBox>
//         </HeaderContain>
//       )}
//     </StHeader>
//   );
// }

// const StHeader = styled.div`
//   height: 6vh;
//   width: 99%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px;
// `;

// export default Header;



// const MoveModal = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #ffffff;
//   border: 1px solid #def1ef;
//   box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25);
//   border-radius: 8px;
//   padding: 2px;
//   width: 188px;
//   height: 174px;
// `;

// // const MoveModalTitle = styled.div`
// //   position: absolute;
// //   width: 142px;
// //   height: 54px;
// //   left: 23px;
// //   top: 41px;

// //   font-weight: 700;
// //   font-size: 18px;
// //   line-height: 150%;
// //   text-align: center;
// //   color: #07133b;
// // `;

// // const MoveModalbtn = styled.button`
// //   display: flex;
// //   flex-direction: row;
// //   justify-content: center;
// //   align-items: center;
// //   padding: 12px 24px;
// //   gap: 5px;
// //   position: absolute;
// //   width: 61px;
// //   height: 41px;
// //   left: 16px;
// //   top: 117px;
// //   background: #65bab6;
// //   border-radius: 8px;
// //   border: none;
// //   cursor: pointer;
// //   //글자
// //   font-weight: 600;
// //   font-size: 14px;
// //   line-height: 17px;
// //   text-align: right;
// //   color: #ffffff;
// //   &:hover {
// //     background: #65bab6;
// //     color: #def1ef;
// //   }
// //   &:active {
// //     background: #4a8e8b;
// //     color: #def1ef;
// //   }
// //   `