import React from 'react';
import styled from 'styled-components';

const RenderDays = () => {
  const Days = styled.div`
    display: flex;
    flex-direction: row;
    /* align-content: space-between;
  align-items:center
  margin-left: 1%; */
  `;
  const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    padding-left: 1%;
    background-color: pink;
    border-radius: 7px;
  `;

  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  return (
    <Days>
      {date.map(item => (
        <Day>{item}</Day>
      ))}
    </Days>
  );
};
export default RenderDays;
