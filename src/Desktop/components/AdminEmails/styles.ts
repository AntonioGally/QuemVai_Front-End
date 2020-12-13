import styled, { css } from "styled-components";

import { Trash } from "@styled-icons/boxicons-regular/Trash";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Send } from "@styled-icons/feather/Send";

export const MyNavBar = styled.div`
  display: flex;
  padding: 5px;
  padding-top: 3%;
  margin-left: 3%;
  background-color: transparent;
`;
export const MyLink = styled.div`
  color: #a9a9a9;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  position: relative;
  cursor: pointer;
  :hover {
    color: var(--buttonFill);
    transition: all 0.5s ease-out;
  }
  &.ActiveLinkAdminEmails {
    ::before {
      content: "";
      width: 60%;
      height: 5px;
      background-color: var(--buttonFill);
      position: absolute;
      bottom: -10px;
      left: 20%;
    }
    color: var(--buttonFill);
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextBreadCumb = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
  > span {
    color: var(--buttonFill);
  }
`;

export const TextLink = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 1600px) {
    font-size: 15px;
  }
  @media (max-width: 1300px) {
    font-size: 12px;
  }
  color: rgba(0, 0, 0, 0.2);
  :hover {
    color: var(--buttonFill);
    fill: var(--buttonFill);
    transition: all 0.5s ease-in-out;
  }
`;

var iconsStyle = css`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
  cursor: pointer;
  :hover {
    color: var(--buttonFill);
    fill: var(--buttonFill);
    transition: all 0.5s ease-in-out;
  }
`;

export const SendIcon = styled(Send)`
  ${iconsStyle}
  fill:none;
`;
export const TrashIcon = styled(Trash)`
  ${iconsStyle}
`;

export const MyWrapper = styled.div`
  width: 90%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
`;
export const MyTable = styled.div`
  width: 100%;
  height: 55vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;
export const Header = styled.div`
  background-color: var(--buttonFill);
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
  > div {
    padding: 10px;
  }
  > div > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: var(--fontWhite);
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 45vh;
  background-color: transparent;
  overflow-y: auto;
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
`;
export const Informations = styled.div`
  padding: 15px;
  border-bottom: 0.5px solid black;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #659ddb;
    transition: all 0.2s ease-in-out;
  }
  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
  }
  > div > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: var(--fontBlack);
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
`;
export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  color: black;
  fill: black;
  flex-shrink: 0;
  cursor: pointer;
`;
export const TitleContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: var(--fontBlack);
  margin-bottom: 3%;
`;
export const MyInput = styled.div`
  > input {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: white;
    font-family: "Poppins";
    font-size: 16px;
    width: 70%;
  }
`;
