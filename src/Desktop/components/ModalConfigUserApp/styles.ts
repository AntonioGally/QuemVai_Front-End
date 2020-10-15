import styled, { css } from "styled-components";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { AccountBox } from "@styled-icons/material/AccountBox";
import { Key } from "@styled-icons/boxicons-regular/Key";
import { InsertPhoto } from "@styled-icons/material/InsertPhoto";
import { HistoryEdu } from "@styled-icons/material-outlined/HistoryEdu";
import { Favorite } from "@styled-icons/material-outlined/Favorite";
import { UserReceived2 } from "@styled-icons/remix-fill/UserReceived2";

import { Search } from "@styled-icons/boxicons-regular/Search";
import { Trash } from "@styled-icons/boxicons-regular/Trash";
import { Map } from "@styled-icons/boxicons-regular/Map";
import { SportsVolleyball } from "@styled-icons/material-rounded/SportsVolleyball";

import { Compass } from "@styled-icons/boxicons-solid/Compass";
import { CalendarAlt } from "@styled-icons/boxicons-regular/CalendarAlt";
import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";

import { PlusSquare } from "@styled-icons/boxicons-solid/PlusSquare";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

import { Star } from "@styled-icons/entypo/Star";

export const MyTitleForm = styled.h3`
  margin-top: 5%;
  margin-bottom: 8%;
  font-family: "Poppins";
  color: var(--fontBlack);
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;

export const MyForm = styled.div`
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    &.firstColumn {
      width: 100%;
    }
  }
`;
export const MyLableText = styled.h5`
  font-family: "Poppins";
  color: var(--fontBlack);
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const MyButton = styled.button`
  background-color: var(--buttonFill);
  border-radius: 6.5px !important;
  color: var(--fontWhite);
  width: 30%;
  padding: 10px;

  &:hover {
    background-color: var(--buttonFill);
    opacity: 0.8;
    color: var(--fontWhite);
    transition: all 0.5s ease-in-out;
  }
`;

export const EditIcon = styled(Edit)`
  width: 28px;
  height: 28px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  margin-left: 20px;
  cursor: pointer;
`;

var sideBarIcons = css`
  width: 42px;
  height: 42px;
  fill: var(--fontWhite);
  flex-shrink: 0;
  margin-right: 10px;
`;
var HistoricIcons = css`
  width: 25px;
  height: 25px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  &.IconModalHistoricInfo {
    width: 40px;
    height: 40px;
  }
`;

export const AccountIcon = styled(AccountBox)`
  ${sideBarIcons};
`;

export const PasswordIcon = styled(Key)`
  ${sideBarIcons};
`;
export const PhotoIcon = styled(InsertPhoto)`
  ${sideBarIcons};
`;
export const HistoricIcon = styled(HistoryEdu)`
  ${sideBarIcons};
`;
export const FavoriteIcon = styled(Favorite)`
  ${sideBarIcons};
`;
export const LogoutIcon = styled(UserReceived2)`
  ${sideBarIcons};
`;

export const MyTitleCard = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 25px;
  color: var(--fontBlack);
  margin-bottom: 10px;
  max-width: 165.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MyTextCard = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 17px;
  color: var(--fontBlack);
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubtitleFavorites = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: var(--fontSecundary);
`;

export const SearchIconCard = styled(Search)`
  width: 20px;
  height: 20px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  margin-left: 15px;
  margin-top: -5px;
  cursor: pointer;
`;
export const TrashIcon = styled(Trash)`
  width: 20px;
  height: 20px;
  fill: red;
  flex-shrink: 0;
  cursor: pointer;
`;
export const PlaceIcon = styled(Map)`
  ${HistoricIcons};
  margin-right: 10px;
`;
export const SportIconCard = styled(SportsVolleyball)`
  ${HistoricIcons};
  margin-right: 10px;
`;

export const CompassIcon = styled(Compass)`
  ${HistoricIcons};
  margin-right: 10px;
`;

export const CalendarIcon = styled(CalendarAlt)`
  ${HistoricIcons};
  margin-right: 10px;
`;
export const TimeIcon = styled(TimeFive)`
  ${HistoricIcons};
  margin-right: 10px;
`;

export const MyTitleModalHistoric = styled.div`
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
export const PlusIcon = styled(PlusSquare)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  cursor: pointer;
  margin-left: 10%;
  @media (max-width: 1000px) {
    margin-left: 0 !important;
  }
`;
export const UserNameHistoricInfo = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  color: var(--fontBlack);
`;
export const MySpanModalHistoricInfo = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: var(--fontSecundary);
`;
export const TextInfoHistoricInfo = styled.div`
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

export const ArrowBackIcon = styled(ArrowBack)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  fill: var(--fontBlack);
  cursor: pointer;
`;
export const WrapperCardAddFavorite = styled.div`
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

var iconsAddFavorite = css`
  width: 48%;
  height: 48%;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
  cursor: pointer;
`;

export const CompassIconFavorite = styled(Compass)`
  width: 100%;
  height: 100%;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
`;
export const SearchSpaceIconFavorite = styled(Search)`
  ${iconsAddFavorite}
`;
export const StarSpaceIconFavorie = styled(Star)`
  width: 48%;
  height: 48%;
  flex-shrink: 0;
  color: transparent;
  cursor: pointer;
  > path {
    stroke: var(--fontBlack);
    stroke-width: 1px;
  }
`;
export const CardsAddFavorite = styled.div`
  background-color: var(--fontWhite);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 5%;
  padding: 20px;
  width: 100%;
`;
export const TextContentFavorite = styled.div`
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
export const MyButtonAddFavorite = styled.button`
  outline: 0;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: var(--buttonFill);
  color: var(--fontWhite);
  font-family: "Poppins";
  cursor: pointer;
`;
