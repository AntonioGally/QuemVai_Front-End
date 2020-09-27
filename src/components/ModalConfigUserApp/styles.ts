import styled, { css } from "styled-components";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { AccountBox } from "@styled-icons/material/AccountBox";
import { Key } from "@styled-icons/boxicons-regular/Key";
import { InsertPhoto } from "@styled-icons/material/InsertPhoto";
import { HistoryEdu } from "@styled-icons/material-outlined/HistoryEdu";

import { Search } from "@styled-icons/boxicons-regular/Search";
import { Map } from "@styled-icons/boxicons-regular/Map";
import { SportsVolleyball } from "@styled-icons/material-rounded/SportsVolleyball";

export const MyTitleForm = styled.h3`
  margin-top: 5%;
  margin-bottom: 8%;
  font-family: "Poppins";
  color: var(--fontBlack);
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
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

export const MyTitleCard = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 25px;
  color: var(--fontBlack);
  margin-bottom: 10px;
`;

export const MyTextCard = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 17px;
  color: var(--fontBlack);
  width: 80%;
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
export const PlaceIcon = styled(Map)`
  ${HistoricIcons};
  margin-right: 10px;
`;
export const SportIconCard = styled(SportsVolleyball)`
  ${HistoricIcons};
  margin-right: 10px;
`;
