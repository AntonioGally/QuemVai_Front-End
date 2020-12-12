import styled from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

export const SideBar = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--blueAdmin);
  > div > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: bold;
    color: var(--fontWhite);
    font-size: 27px;
    margin: 5% 0 15% 0;
    @media (max-width: 1300px) {
      font-size: 22px;
    }
  }
`;
export const MyLink = styled.div`
  position: relative;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  margin: 5% 0 5% 10%;
  cursor: pointer;
  color: var(--fontWhite);
  @media (max-width: 1300px) {
    font-size: 20px;
    margin: 3% 0 5% 10%;
  }
  :hover {
    color: var(--buttonFill) !important;
    transition: all 0.5s ease-in-out;
  }
  &.ActiveLinkSideBarAdmin {
    ::before {
      content: "";
      width: 20px;
      height: 100%;
      background-color: var(--buttonFill);
      position: absolute;
      top: 0;
      bottom: 0;
      left: -40px;
    }
  }
`;
export const MyHeader = styled.div`
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  height: 10vh;
  width: 100%;
  padding: 20px;
`;
export const ArrowBackIcon = styled(ArrowBack)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  fill: black;
  color: black;
  flex-shrink: 0;
  cursor: pointer;
`;
export const MyDropdown = styled.div`
  > div > button {
    background: none;
    color: black;
    border: none;
    align-items: center;
    font-size: 24px;
    display: flex;
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    :hover {
      background: none;
      color: black;
      border: none;
    }
    :active {
      background: none !important;
      color: black !important;
      border: none !important;
    }
    :focus {
      background: none !important;
      color: black !important;
      border: none !important;
    }
  }
`;
export const PhotoAdm = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #DDDDDD;
`;
