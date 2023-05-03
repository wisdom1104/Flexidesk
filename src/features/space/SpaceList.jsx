import React from 'react';
import { Column } from '../../components/Flex';
import {
  ClisckedListItem,
  ListFloor,
  ListItem,
  SpaceInnerList,
  StListTitle,
  StListbox,
  StSpaceList,
} from '../../shared/SpaceStyles';
import { StSpacePagePhoto } from '../../pages/welcome/WelcomeStyled';

function SpaceList({
  floors,
  spaces,
  onClickSpaceListHandler,
  clickedSpaceId,
}) {
  return (
    <Column>
      <StListTitle>
        <StSpacePagePhoto
          width="52px"
          marginTop
          src={`${process.env.PUBLIC_URL}/img/space.png`}
          alt="managementIcon"
        />
        <div>스페이스</div>
      </StListTitle>
      <StListbox>
        <StSpaceList>
          {floors?.map(floor => {
            if (floor && floor.spaceList?.length > 0)
              return (
                <div key={floor.floorId}>
                  <ListFloor>{floor.floorName}</ListFloor>
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
                              {space.spaceName}
                            </ClisckedListItem>
                          ) : (
                            <ListItem
                              onClick={() =>
                                onClickSpaceListHandler(space.spaceId)
                              }
                            >
                              {space.spaceName}
                            </ListItem>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </SpaceInnerList>
                </div>
              );
          })}
          {spaces?.map(space => {
            const isClicked = space.spaceId === clickedSpaceId;
            if (space && space.floorId === null)
              return (
                <React.Fragment key={space.spaceId}>
                  {isClicked ? (
                    <ClisckedListItem
                      onClick={() => onClickSpaceListHandler(space.spaceId)}
                    >
                      {space.spaceName}
                    </ClisckedListItem>
                  ) : (
                    <ListItem
                      onClick={() => onClickSpaceListHandler(space.spaceId)}
                    >
                      {space.spaceName}
                    </ListItem>
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
