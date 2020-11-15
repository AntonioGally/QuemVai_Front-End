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

export const ContainerSvg = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  z-index: -20;
`;

export const TitleEvent = styled.div`
  width: 40%;
  margin: 5%;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  color: var(--fontBlack);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CreatedContent = styled.div`
  > div > img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  > div > div > div > span {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 12px;
    color: var(--fontBlack);
    &.userNameEventInfoMobile {
      font-weight: 600;
    }
    &.idUserNameEventInfoMobile {
      margin-left: 5px;
      font-size: 10px;
      color: var(--fontSecundary);
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
