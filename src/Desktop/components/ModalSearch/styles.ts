import styled, { css } from "styled-components";

import { AddUser } from "@styled-icons/entypo/AddUser";
import { Sports } from "@styled-icons/material/Sports";
import { SportsVolleyball } from "@styled-icons/material/SportsVolleyball";
import { Exit } from "@styled-icons/boxicons-regular/Exit";
import { Compass } from "@styled-icons/boxicons-regular/Compass";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

export const ArrowBackIcon = styled(ArrowBack)`
  width: 35px;
  height: 35px;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  cursor: pointer;
  flex-shrink: 0;
  margin: 4% 0 0 5%;
`;

export const MyTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;

  margin-top: 7%;
  margin-left: 9%;
`;
export const TitleCardWrapper = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  margin-top: 4%;
`;
export const MyCard = styled.div`
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--fontWhite);
  padding: 10px;
  margin: 3%;
  border-radius: 15px;
`;
export const NameUser = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1000px) {
    margin: 5% auto 5% auto;
  }
`;

var iconsStyle = css`
  width: 65px;
  height: 65px;
  fill: var(--buttonFill);
  color: var(--buttonFill);
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 55px;
    height: 55px;
  }
`;

export const AddUserIcon = styled(AddUser)`
  ${iconsStyle}
`;

export const SubTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
`;
export const TextContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  margin-left: 10px;
`;
export const WhistleIcon = styled(Sports)`
  ${iconsStyle}
`;

export const VolleyIcon = styled(SportsVolleyball)`
  ${iconsStyle}
`;
export const ExitIcon = styled(Exit)`
  ${iconsStyle}
`;
export const CompassIcon = styled(Compass)`
  ${iconsStyle}
`;
export const SearchIcon = styled(SearchAlt)`
  ${iconsStyle}
`;
