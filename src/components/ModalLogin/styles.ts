import styled, { css } from "styled-components";

import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";

export const MyForm = styled.div`
  > input {
    border-radius: 30px !important;
  }

  margin-bottom: 10%;
`;

export const MyButton = styled.div`
  display: flex;
  flex-direction: column;
  > Button {
    margin-bottom: 5%;
  }
`;

export const SocialContainer = styled.div`
  width:100%;
  height:300px;
  background-color:#B8FFEE;
  display:flex;
  flex-direction:column;
  align-items:center;

  border-top-left-radius: 75px;
  border-bottom-right-radius: 75px;
`;
export const MySocialRow = styled.div`
  margin-top:50%;
`;
const svgCss = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-right:10px;
`;

export const InstaLogo = styled(InstagramAlt)`
  ${svgCss}
`;
export const FacebookLogo = styled(FacebookCircle)`
  ${svgCss}
`;
