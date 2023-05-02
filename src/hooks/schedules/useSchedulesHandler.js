// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { __addSchdule } from '../../redux/modules/schedules';

// export const useSchedulesHandler=(reqScheduleValue , param, scheduleValue, setScheduleValue) =>{

//     const navi = useNavigate();
//     const dispatch = useDispatch();

//     const onsubmitHandler = async e => {
//       e.preventDefault();
//       await dispatch(__addSchdule(reqScheduleValue));
//       // await dispatch(__pathScehdule({ reqScheduleValue, scId }));
//       navi(`/scheduledetail/${param}`);
//     }
    
//     const onChangeHandler= e =>{
//       setScheduleValue({
//       ...scheduleValue,
//       scTitle: e.target.value,
//     })
// }

// //              e =>
// //             setScheduleValue({
// //               ...scheduleValue,
// //               scComment: e.target.value,
// //             })

//     return{ onsubmitHandler, onChangeHandler }
// }
