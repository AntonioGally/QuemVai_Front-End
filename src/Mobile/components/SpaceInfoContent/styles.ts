import styled, { css } from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

import { Map } from "@styled-icons/boxicons-regular/Map";
import { Compass } from "@styled-icons/boxicons-solid/Compass";
import { SportsVolleyball } from "@styled-icons/material-rounded/SportsVolleyball";
import { Description } from "@styled-icons/material-outlined/Description";

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
  font-size: 18px;
  color: var(--fontBlack);
`;
export const ContainerSvg = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  z-index: -20;
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
export const WrapperTable = styled.div`
  max-height: 300px;
  overflow-y: auto;
  max-width: 95%;
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
export const DescriptionIcon = styled(Description)`
  ${IconsStyle}
`;
export const SportsIcon = styled(SportsVolleyball)`
  ${IconsStyle}
`;
