import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const useSchedulesHandler =(
  reqScheduleValue , 
  param, 
  setScheduleValue,
  dispatchValue,
  scId
  ) => {

    const navi = useNavigate();
    const dispatch = useDispatch();


    const onSubmitHandler = async e => {
      e.preventDefault();
      const value = { ...reqScheduleValue };
      if (scId) {
        value.scId = scId;
      } else {
        delete value.scId;
      }
      await dispatch(dispatchValue(value));
      navi(`/scheduledetail/${param}`);
    };
    
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
        console.log(name)

      setScheduleValue(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
    return { onSubmitHandler, onChangeHandler }
}
