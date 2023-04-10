import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
import { format, addDays, isSameDay, isSameMonth, parse } from 'date-fns';
import styled from 'styled-components';

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  const Body = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background-color: pink;
  `;
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    gap: 3%;
  `;
  const ColCell = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    margin: 4px 0 0 4px;
  `;

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'dd');
      const cloneDay = day;
      days.push(
        <ColCell
          // className={`col cell ${
          //   !isSameMonth(day, monthStart)
          //     ? 'disabled'
          //     : isSameDay(day, selectedDate)
          //     ? 'selected'
          //     : format(currentMonth, 'M') !== format(day, 'M')
          //     ? 'not-valid'
          //     : 'valid'
          // }`}
          key={day}
          onClick={() => onDateClick(parse(cloneDay))} //여기에서 데이터를 받고 넘겨..?
        >
          <span
          // className={
          //   format(currentMonth, 'M') !== format(day, 'M')
          //     ? 'text not-valid'
          //     : ''
          // }
          >
            {formattedDate}
          </span>
        </ColCell>,
      );
      day = addDays(day, 1);
    }
    rows.push(<Row key={day}>{days}</Row>);
    days = [];
  }
  return <Body>{rows}</Body>;
};
export default RenderCells;
