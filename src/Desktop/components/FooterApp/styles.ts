import styled, { css } from "styled-components";
import { SportsBasketball } from "@styled-icons/material-rounded/SportsBasketball";
import { CalendarEvent } from "@styled-icons/bootstrap/CalendarEvent";
import { Profile } from "@styled-icons/icomoon/Profile";
import { LocationPlus } from "@styled-icons/boxicons-regular/LocationPlus";

export const iconCss = css`
  height: 30px;
  width: 30px;
  flex-shrink: 0;
`;

export const SportIcon = styled(SportsBasketball)`
  ${iconCss}
`;
export const EventsIcon = styled(CalendarEvent)`
  ${iconCss}
`;
export const ProfileIcon = styled(Profile)`
  ${iconCss}
`;
export const LocationIcon = styled(LocationPlus)`
  ${iconCss}
`;
