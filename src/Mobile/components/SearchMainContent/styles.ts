import styled, { css } from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { AddUser } from "@styled-icons/entypo/AddUser";
import { Sports } from "@styled-icons/material/Sports";
import { SportsVolleyball } from "@styled-icons/material/SportsVolleyball";
import { Exit } from "@styled-icons/boxicons-regular/Exit";
import { Compass } from "@styled-icons/boxicons-regular/Compass";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

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

export const WrapperCards = styled.div`
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;

  &.scrollSearchMobile {
    max-height: 400px;
    overflow-y: auto;
  }
`;

export const MyCard = styled.div`
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--fontWhite);
  padding: 10px;
  margin: 3%;
  border-radius: 15px;
  > div {
    align-items: center;
  }
`;

export const SubTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
export const TextContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  margin-left: 10px;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var iconStyle = css`
  width: 48%;
  height: 48%;
  flex-shrink: 0;
  color: var(--buttonFill);
  fill: var(--buttonFill);
`;
export const AddIcon = styled(AddUser)`
  ${iconStyle};
`;
export const VolleyIcon = styled(SportsVolleyball)`
  ${iconStyle};
  color: var(--fontBlack);
  fill: var(--fontBlack);
  width: 50px;
  height: 50px;
`;
export const WhistleIcon = styled(Sports)`
  ${iconStyle};
  color: var(--fontBlack);
  fill: var(--fontBlack);
  width: 50px;
  height: 50px;
`;
export const CompassIcon = styled(Compass)`
  ${iconStyle};
  color: var(--fontBlack);
  fill: var(--fontBlack);
  width: 50px;
  height: 50px;
`;
export const ExitIcon = styled(Exit)`
  ${iconStyle};
`;
export const SearchIcon = styled(SearchAlt)`
  ${iconStyle};
`;
