import styled, { css } from "styled-components";

import { Pencil } from "@styled-icons/boxicons-regular/Pencil";

import { Search } from "@styled-icons/boxicons-regular/Search";
import { Trash } from "@styled-icons/boxicons-regular/Trash";
import { Map } from "@styled-icons/boxicons-regular/Map";
import { SportsVolleyball } from "@styled-icons/material-rounded/SportsVolleyball";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 10px;
`;
export const NavBar = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const MyLink = styled.div`
  display: flex;
  min-width: 40%;
  > span {
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    margin-right: 10px;
    color: #a9a9a9;
    &.ActiveLinkMobileAccount {
      position: relative;
      color: var(--buttonFill) !important;
      ::after {
        content: "";
        background-color: var(--buttonFill);
        width: 50px;
        position: absolute;
        bottom: -6px;
        left: calc(50% - 25px);
        border-radius: 10px;
        height: 3px;
      }
    }
  }
`;

export const TitleForm = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
`;
export const MySearchInput = styled.input`
  border-radius: 10px;
  height: 60px;
  outline: 0;
  padding: 10px 10px 10px 25px;
  border: 0;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);

  ::-webkit-input-placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #a9a9a9;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;
export const EditIcon = styled(Pencil)`
  width: 30px;
  height: 30px;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
  margin-left: 10px;
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

export const SearchIconCard = styled(Search)`
  width: 20px;
  height: 20px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  margin-left: 15px;
  margin-top: -5px;
  cursor: pointer;
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

export const PlaceIcon = styled(Map)`
  ${HistoricIcons};
  margin-right: 10px;
`;
export const SportIconCard = styled(SportsVolleyball)`
  ${HistoricIcons};
  margin-right: 10px;
`;
export const TrashIcon = styled(Trash)`
  width: 20px;
  height: 20px;
  fill: red;
  flex-shrink: 0;
  cursor: pointer;
`;
