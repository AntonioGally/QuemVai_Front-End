import styled from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Exit } from "@styled-icons/boxicons-regular/Exit";

export const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: var(--fontBlack);
`;
export const ExitIcon = styled(Exit)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: var(--buttonFill);
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;
export const Photo = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;
