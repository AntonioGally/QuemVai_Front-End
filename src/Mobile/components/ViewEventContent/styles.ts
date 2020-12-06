import styled, { css } from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

import { Map } from "@styled-icons/boxicons-regular/Map";
import { Compass } from "@styled-icons/boxicons-solid/Compass";
import { CalendarAlt } from "@styled-icons/boxicons-regular/CalendarAlt";
import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";
import { SportsVolleyball } from "@styled-icons/material-rounded/SportsVolleyball";

export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  flex-shrink: 0;
  margin: 10px 0 0 10px;
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: var(--fontBlack);
`;
export const ContainerSvg = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  z-index: -20;
`;

export const CreatedContent = styled.div`
  > div > img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 17px;
    flex-shrink: 0;
  }
  > div > div > div > span {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    font-weight: 600;
    color: var(--fontBlack);
    &.userNameEventInfoMobile {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 16px;
      max-width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.idUserNameEventInfoMobile {
      margin-left: 5px;
      font-size: 13px;
      color: #5d5d5d;
    }
  }
`;

export const SubTitle = styled.div`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 18px;
  color: var(--fontBlack);
`;
export const TextContent = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 16px;
  width: 90%;
  color: var(--fontBlack);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var IconsStyle = css`
  width: 35px;
  height: 35px;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
`;
export const PlaceIcon = styled(Map)`
  ${IconsStyle}
`;
export const CompassIcon = styled(Compass)`
  ${IconsStyle}
`;
export const SportIconCard = styled(SportsVolleyball)`
  ${IconsStyle}
`;
export const CalendarIcon = styled(CalendarAlt)`
  ${IconsStyle}
`;
export const TimeIcon = styled(TimeFive)`
  ${IconsStyle}
`;
