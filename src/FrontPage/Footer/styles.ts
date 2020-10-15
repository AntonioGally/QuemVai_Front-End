import styled, { css } from "styled-components";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { GooglePlusWithCircle } from "@styled-icons/entypo-social/GooglePlusWithCircle";

const IconCss = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: black;
`;

export const FaceBookIcon = styled(FacebookCircle)`
  ${IconCss}
`;
export const InstagramIcon = styled(Instagram)`
  ${IconCss}
`;
export const GooglePlusIcon = styled(GooglePlusWithCircle)`
  ${IconCss}
`;
