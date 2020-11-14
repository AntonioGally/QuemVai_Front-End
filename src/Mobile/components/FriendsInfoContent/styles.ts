import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { UserMinus } from "@styled-icons/boxicons-regular/UserMinus";
import { Verified } from "@styled-icons/material/Verified";

export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  flex-shrink: 0;
  margin: 10px 0 0 10px;
`;

export const ContainerSvg = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  z-index: -20;
`;
export const ImageUser = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  z-index: 1000;
`;
export const NameUser = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-left: 16px;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MyCol = styled.div`
  width: 20%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;
export const InformationUser = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  max-width: 65%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5%;
`;

export const MyButton = styled.button`
  background-color: var(--buttonOutLined);
  border-radius: 7px;
  border: 1px solid var(--fontWhite);
  color: var(--fontWhite);
  transition: all 0.5s ease;
  padding: 10px 0 10px 0;
  &.WithOutTrustButton {
    padding: 10px;
  }
`;

export const UserIcon = styled(UserMinus)`
  height: 35px;
  width: 35px;
  fill: #33d7a3;
  flex-shrink: 0;
  margin-right: 20px;
`;

export const VerifiedIcon = styled(Verified)`
  height: 35px;
  width: 35px;
  fill: #3fa3ff;
  flex-shrink: 0;
  margin-right: 20px;
`;
