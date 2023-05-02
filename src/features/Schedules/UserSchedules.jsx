// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { __getUserSchedules } from '../../redux/modules/userSchedules';
// import Calendar from '../Reservation/Calendar';

// function UserSchedules() {
//   const dispatch = useDispatch();
//   const { userSchedules } = useSelector(state => state.userSchedules);
//   const [isOnInput, setIsOnInput] = useState(false);

//   // const addScheduleHandler = () => {
//   //   setIsOnInput(!isOnInput);
//   //   __addSchedule;
//   // };

//   useEffect(() => {
//     dispatch(__getUserSchedules());
//   }, []);

//   return (
//     <>
//       <div>
//         {userSchedules.map(item => {
//           return (
//             <>
//               <div>시작 : {item.scStart}</div>
//               <div>종료 : {item.scEnd}</div>
//               <div>제목: {item.scTitle}</div>
//               <div>내용: {item.scComment}</div>
//               <div>------------------------------</div>
//             </>
//           );
//         })}
//         <button
//           onClick={() => {
//             setIsOnInput(!isOnInput);
//           }}
//         >
//           +
//         </button>
//         {isOnInput ? (
//           <div>
//             시작:
//             <input />
//             종료:
//             <input />
//             제목:
//             <input />
//             내용:
//             <input />
//             <button>작성완료</button>
//           </div>
//         ) : null}
//       </div>
//     </>
//   );
// }

// export default UserSchedules;
