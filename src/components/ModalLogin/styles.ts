import styled, { css } from "styled-components";

import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";



export const SocialContainer = styled.div`
  width:100%;
  height:720px;
  background-color:#33D7A3;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const MySocialRow = styled.div`
  
`;
const svgCss = css`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  margin-right:10px;
`;

export const InstaLogo = styled(InstagramAlt)`
  ${svgCss}
`;
export const FacebookLogo = styled(FacebookCircle)`
  ${svgCss}
`;
