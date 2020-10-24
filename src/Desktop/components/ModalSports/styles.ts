import styled, { css } from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { SportsVolleyball } from "@styled-icons/material/SportsVolleyball";
import { Exit } from "@styled-icons/boxicons-regular/Exit";
import { Compass } from "@styled-icons/boxicons-regular/Compass";
import { Filter } from "@styled-icons/fa-solid/Filter";

export const ArrowBackIcon = styled(ArrowBack)`
  width: 35px;
  height: 35px;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  cursor: pointer;
  flex-shrink: 0;
  margin: 4% 0 0 5%;
`;

export const FilterIcon = styled(Filter)`
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
  @media (max-width: 1000px) {
    font-size: 30px;
  }

  margin-top: 7%;
  margin-left: 9%;
`;
export const TitleCardWrapper = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
  margin-top: 4%;
`;
export const MyCard = styled.div`
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--fontWhite);
  padding: 10px;
  margin: 3%;
  border-radius: 15px;
`;
var iconsStyle = css`
  width: 65px;
  height: 65px;
  fill: var(--buttonFill);
  color: var(--buttonFill);
  cursor: pointer;
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

export const VolleyIcon = styled(SportsVolleyball)`
  ${iconsStyle}
`;
export const ExitIcon = styled(Exit)`
  ${iconsStyle}
`;
export const CompassIcon = styled(Compass)`
  ${iconsStyle}
`;

export const ButtonFilter = styled.button`
  border: none;
  outline: 0;
  width: unset;
  height: unset;
  background-color: transparent;

  :focus {
    border: none;
    outline: 0;
  }
  :active {
    border: none;
    outline: 0;
  }
`;
