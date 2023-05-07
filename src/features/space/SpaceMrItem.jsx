import React from 'react';
import { useCheckTime } from '../../hooks/space/useCheckTime';
import Text from '../../components/Text';
import { StBox } from '../../pages/space/SpaceStyles';

function SpaceMrItem({ mr, navi }) {
  const { startTime, startDay, day, targetTime } = useCheckTime(mr);
  return (
    <>
      {startTime.length > 0 ? (
        <>
          {startDay.map(item =>
            item === day ? (
              <>
                {startTime.map(timeItem => (
                  <>
                    {timeItem === targetTime ? (
                      <StBox
                        key={mr.mrId}
                        onClick={() => navi(`/calender/${mr.mrId}`)}
                        transformValue={`translate(${mr.x}px, ${mr.y}px)`}
                        background="#def1ef"
                        color="#65bab6"
                      >
                        <Text
                          shape="T16_600"
                          color="var(--mint_002)"
                          ta="center"
                        >
                          {mr.mrName}
                        </Text>
                        <Text
                          shape="T12_400"
                          color="var(--grey_002)"
                          ta="center"
                        >
                          - 사용중 -
                        </Text>
                      </StBox>
                    ) : (
                      <StBox
                        key={mr.mrId}
                        onClick={() => navi(`/calender/${mr.mrId}`)}
                        transformValue={`translate(${mr.x}px, ${mr.y}px)`}
                      >
                        <Text
                          shape="T16_600"
                          color="var(--grey_002)"
                          ta="center"
                        >
                          {mr.mrName}
                        </Text>
                      </StBox>
                    )}
                  </>
                ))}
              </>
            ) : (
              <StBox
                key={mr.mrId}
                onClick={() => navi(`/calender/${mr.mrId}`)}
                transformValue={`translate(${mr.x}px, ${mr.y}px)`}
              >
                <Text shape="T16_600" color="var(--grey_002)" ta="center">
                  {mr.mrName}
                </Text>
              </StBox>
            ),
          )}
        </>
      ) : (
        <StBox
          key={mr.mrId}
          onClick={() => navi(`/calender/${mr.mrId}`)}
          transformValue={`translate(${mr.x}px, ${mr.y}px)`}
        >
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {mr.mrName}
          </Text>
        </StBox>
      )}
    </>
  );
}

export default SpaceMrItem;
