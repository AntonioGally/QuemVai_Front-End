import styled, { css } from "styled-components";

import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { VolleyballBall } from "@styled-icons/fa-solid/VolleyballBall";
import { Sports } from "@styled-icons/material/Sports";
import { Compass } from "@styled-icons/bootstrap/Compass";
import { UserFriends } from "@styled-icons/fa-solid/UserFriends";

var footerIcon = css`
  height: 65%;
  width: 65%;
  cursor: pointer;
  
  color: var(--buttonFill);
  fill: var(--buttonFill);
`;

export const HomeIcon = styled(HomeAlt)`
  ${footerIcon};
`;
export const SportsIcon = styled(VolleyballBall)`
  ${footerIcon};
`;
export const EventsIcon = styled(Sports)`
  ${footerIcon};
`;
export const SpacesIcon = styled(Compass)`
  ${footerIcon};
`;
export const FriendsIcon = styled(UserFriends)`
  ${footerIcon};
`;

