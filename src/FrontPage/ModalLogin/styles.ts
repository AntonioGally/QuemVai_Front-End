import styled, { css } from "styled-components";

import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";

export const SocialContainer = styled.div`
  width: 100%;
  height: 720px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:"Poppins";
  color:var(--fontWhite);
  border-radius : 30px 0px 0px 30px;
`;
export const ErroLogin = styled.div`
  font-size: 15px;
  font-family: "Poppins";
  color: red;
  font-weight: 600;
`;

export const MySocialRow = styled.div``;
const svgCss = css`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  cursor:pointer;
  fill:var(--fontBlack);
  margin-right: 10px;
`;

export const InstaLogo = styled(InstagramAlt)`
  ${svgCss}
`;
export const FacebookLogo = styled(FacebookCircle)`
  ${svgCss}
`;
export const TittlePassword = styled.h5`
  >span {
    font-weight:bold;
  }
  span > a {
    &.ForgotPassword {
      color: blue;
      font-size:12px;
      font-family:"Poppins";
      font-weight:500 !important;
      margin-left:12px;
      cursor: pointer;
    }
  }
`;
