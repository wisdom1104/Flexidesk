import React from 'react';
import { Column } from '../../components/Flex';
import {
  ClisckedListItem,
  SpaceInnerList,
  StListbox,
  StSpaceList,
} from '../../shared/SpaceStyles';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';

function SpaceList({
  floors,
  spaces,
  onClickSpaceListHandler,
  clickedSpaceId,
}) {
  return (
    <Column>
      <IconTitle src="space" alt="managementIcon" children="스페이스" />
      <StListbox>
        <StSpaceList>
          {floors?.map(
            floor =>
              floor &&
              floor.spaceList?.length > 0 && (
                <div key={floor.floorId}>
                  <Text
                    shape="T18_700_22"
                    mg="15px 0 0 0"
                    pd="5px 10px"
                    cursor="default"
                  >
                    {floor.floorName}
                  </Text>
                  <Text
                    shape="T18_700_22"
                    mg="0px 10px"
                    data-floor-id={floor.floorId}
                    key={floor.floorId}
                  ></Text>
                  <SpaceInnerList>
                    {floor.spaceList.map(space => {
                      const isClicked = space.spaceId === clickedSpaceId;
                      return (
                        <React.Fragment key={space.spaceId}>
                          {isClicked ? (
                            <ClisckedListItem
                              onClick={() =>
                                onClickSpaceListHandler(space.spaceId)
                              }
                            >
                              <Text
                                shape="T16_400"
                                // mg="15px 0 0 0"
                                pd="5px 10px"
                                cursor="pointer"
                                onClick={() =>
                                  onClickSpaceListHandler(space.spaceId)
                                }
                              >
                                {space.spaceName}
                              </Text>
                            </ClisckedListItem>
                          ) : (
                            <Text
                              shape="T16_400"
                              pd="5px 10px"
                              cursor="pointer"
                              onClick={() =>
                                onClickSpaceListHandler(space.spaceId)
                              }
                            >
                              {space.spaceName}
                            </Text>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </SpaceInnerList>
                </div>
              ),
          )}
          {spaces?.map(space => {
            const isClicked = space.spaceId === clickedSpaceId;
            if (space && space.floorId === null)
              return (
                <React.Fragment key={space.spaceId}>
                  {isClicked ? (
                    <ClisckedListItem
                      onClick={() => onClickSpaceListHandler(space.spaceId)}
                    >
                      <Text shape="T18_700_22" pd="5px 10px" cursor="pointer">
                        {space.spaceName}
                      </Text>
                    </ClisckedListItem>
                  ) : (
                    <Text
                      shape="T18_700_22"
                      pd="5px 10px"
                      cursor="pointer"
                      onClick={() => onClickSpaceListHandler(space.spaceId)}
                    >
                      {space.spaceName}
                    </Text>
                  )}
                </React.Fragment>
              );
          })}
        </StSpaceList>
      </StListbox>
    </Column>
  );
}

export default SpaceList;
