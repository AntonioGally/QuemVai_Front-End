import styled, { css } from "styled-components";
import { Notifications } from "@styled-icons/ionicons-outline/Notifications";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { VolleyballBall } from "@styled-icons/fa-solid/VolleyballBall";
import { Sports } from "@styled-icons/material/Sports";
import { Compass } from "@styled-icons/bootstrap/Compass";
import { UserFriends } from "@styled-icons/fa-solid/UserFriends";

export const RingIcon = styled(Notifications)`
  width: 24px;
  height: 24px;
  color: var(--buttonFill);
  flex-shrink: 0;
  margin-right: 13px;
`;

var SideBarIcon = css`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 10%;
  fill: var(--fontWhite);
  color: var(--fontWhite);
  cursor: pointer;
`;
export const HomeIcon = styled(HomeAlt)`
  ${SideBarIcon};
  &.home {
    fill: var(--buttonFill);
  }
`;
export const SportsIcon = styled(VolleyballBall)`
  ${SideBarIcon};
`;
export const EventsIcon = styled(Sports)`
  ${SideBarIcon};
`;
export const SpacesIcon = styled(Compass)`
  ${SideBarIcon};
`;
export const FriendsIcon = styled(UserFriends)`
  ${SideBarIcon};
`;
