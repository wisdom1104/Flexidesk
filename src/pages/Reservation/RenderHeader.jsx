import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import React from 'react';
import styled, { css } from 'styled-components';

const HederRow = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  border: solid 1px black;
  margin: 10px 0 10px 0;
  padding: 5px;
`;

const ColStart = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-left: 1%;
`;
const ColEnd = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  margin-left: 50%;
`;

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <HederRow>
      <ColStart>
        <span className="text">
          <span className="text month">{format(currentMonth, 'M')}월</span>
          {format(currentMonth, 'yyyy')}
        </span>
      </ColStart>
      <ColEnd>
        <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </ColEnd>
    </HederRow>
  );
};
export default RenderHeader;
