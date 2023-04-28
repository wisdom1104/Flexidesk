// import React, { useState, useEffect } from 'react';
// import { useDispatch  } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { cookies } from '../shared/cookies';

// const useTimeout = (action, args = []) => {
//   const dispatch = useDispatch();
//   const navi = useNavigate();
//   const token = cookies.get("token")
//   const role = cookies.get("role")
//   const [showSkeleton, setShowSkeleton] = useState(true);

//   useEffect(() => {
//     if (!token) {
//       navi('/');
//     } else if (role !== 'ADMIN') {
//       navi('/');
//     } else {
//       const loadData = async () => {
//         try {
//           dispatch(action(...args));
//           setShowSkeleton(false);
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       const timer = setTimeout(() => {
//         loadData();
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [token, role]);

//   return showSkeleton;
// };

// export default useTimeout;