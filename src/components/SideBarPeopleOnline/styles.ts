import styled from "styled-components";

import { UserMinus } from "@styled-icons/boxicons-regular/UserMinus";
import { Verified } from "@styled-icons/material/Verified";

export const Container = styled.div`  
  overflow-y: auto;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }

  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 0;
  /* > div {
    position: relative;
  } */
  > div > div > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 1300px) {
      width: 75px;
      height: 75px;
    }
  }
`;

export const MyRowPeople = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  font-family: "Poppins";
  font-size: 15pt;
  color: var(--fontBlack);
  text-align: center;
  cursor: pointer;

  /* &::after {
    width: 9px;
    height: 9px;
    position: absolute;
    background-color: green;
    border-radius: 50%;
    content: "";
  } */
`;
export const SpanIdUser = styled.span`
  font-family: "Poppins";
  font-size: 23px;
  color: var(--fontSecundary);
`;

export const ImgUser = styled.img`
  border-radius: 50%;
  width: 190px;
  height: 190px;
`;

export const FriendName = styled.div`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: var(--fontBlack);
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10%;
`;
export const TitleText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: var(--fontBlack);
  margin-right: 10px;
`;
export const AtributeText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MyButton = styled.button`
  background-color: var(--buttonOutLined);
  border-radius: 7px;
  border: 1px solid var(--fontWhite);
  color: var(--fontWhite);
  transition: all 0.5s ease;
  padding: 10px 0 10px 0;
  @media (max-width: 1000px) {
    margin-top: 5%;
  }
  &.WithOutTrustButton {
    padding: 10px;
  }
`;

export const UserIcon = styled(UserMinus)`
  height: 45px;
  width: 45px;
  fill: #33d7a3;
  flex-shrink: 0;
  margin-right: 20px;
`;
export const VerifiedIcon = styled(Verified)`
  height: 45px;
  width: 45px;
  fill: #3fa3ff;
  flex-shrink: 0;
  margin-right: 20px;
`;
