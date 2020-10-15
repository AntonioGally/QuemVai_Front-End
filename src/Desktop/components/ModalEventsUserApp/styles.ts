import styled, { css } from "styled-components";
import { Compass } from "@styled-icons/fa-solid/Compass";
import { Exit } from "@styled-icons/boxicons-regular/Exit";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Star } from "@styled-icons/entypo/Star";

import { CalendarAlt } from "@styled-icons/boxicons-regular/CalendarAlt";
import { Map } from "@styled-icons/boxicons-regular/Map";
import { SportsVolleyball } from "@styled-icons/material-rounded/SportsVolleyball";

export const MyTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  margin: 4%;
`;
export const MyWrapperCards = styled.div`
  height: 600px;
  padding: 15px;
  overflow-y: auto;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;
export const MyCards = styled.div`
  background-color: var(--fontWhite);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 5%;
  padding: 20px;
  width: 100%;
`;
export const CompassIcon = styled(Compass)`
  width: 100%;
  height: 100%;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
`;
export const ExitIcon = styled(Exit)`
  width: 48%;
  height: 48%;
  color: var(--primary);
  fill: var(--primary);
  flex-shrink: 0;
  cursor: pointer;
`;
export const SearchSpaceIcon = styled(SearchAlt)`
  width: 48%;
  height: 48%;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
  cursor: pointer;
`;
export const SearchIcon = styled(SearchAlt)`
  width: 35px;
  height: 35px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  position: absolute;
  left: calc(100% - 40px);
  cursor: pointer;
`;
export const TextContent = styled.div`
  > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    margin-right: 10px;
  }
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ArrowBackIcon = styled(ArrowBack)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  fill: var(--fontBlack);
  cursor: pointer;
`;
export const MyTileSpaceInfo = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 1%;
`;
export const MyTextContentSpaceInfo = styled.div`
  margin-left: 4%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MyTextAreaSpaceInfo = styled.div`
  margin-left: 4%;
  > div > textarea {
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px !important;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }
`;
export const WrapperSports = styled.div`
  margin-left: 4%;
  height: 200px;
  width: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;
export const MyButton = styled.button`
  outline: 0;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: var(--buttonFill);
  color: var(--fontWhite);
  font-family: "Poppins";
  cursor: pointer;
`;
export const MyTitleModalCreateEvents = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  width: 55%;
  @media (max-width: 1000px) {
    width: 80%;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StarIcon = styled(Star)`
  height: 35px;
  width: 35px;
  flex-shrink: 0;
  cursor: pointer;
  > path {
    stroke: var(--fontBlack);
    stroke-width: 1px;
  }
`;
export const MySubTitleModalCreateEvents = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

export const MyTextContentModalCreateEvents = styled.div`
  font-family: "Poppins";
  margin-left: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MyTextAreaModalCreateEvents = styled.div`
  @media (min-width: 1000px) {
    margin-left: 10%;
  }
  > div > textarea {
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px !important;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }
`;

var EventsIcon = css`
  width: 25px;
  height: 25px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  &.IconModalHistoricInfo {
    width: 40px;
    height: 40px;
  }
`;

export const MyTitleViewEvents = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  color: var(--fontBlack);
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PlaceIcon = styled(Map)`
  ${EventsIcon};
  margin-right: 10px;
`;
export const SportIconCard = styled(SportsVolleyball)`
  ${EventsIcon};
  margin-right: 10px;
`;
export const CalendarIcon = styled(CalendarAlt)`
  ${EventsIcon};
  margin-right: 10px;
`;
export const CompassIconViewEvents = styled(Compass)`
  ${EventsIcon};
  margin-right: 10px;
`;
export const MySpanModalViewEvent = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: var(--fontSecundary);
`;
export const TextInfoModalViewEvents = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: var(--fontBlack);
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MyTextCard = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  color: var(--fontBlack);
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MyButtonFinishEvent = styled.button`
  border: 0;
  outline: 0;
  background: linear-gradient(169.88deg, #e83a3a 13.07%, #e86a6a 78.14%);
  border-radius: 7px;
  padding: 10px 46px;
  color: var(--fontWhite);
`;
