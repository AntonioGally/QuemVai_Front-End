import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

import { CheckmarkDone } from "@styled-icons/ionicons-outline/CheckmarkDone";
import { Delete } from "@styled-icons/feather/Delete";
import { Trash } from "@styled-icons/boxicons-regular/Trash";

export const NavBar = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    display: none;
  }

  padding: 15px;
`;
export const MyLink = styled.div`
  display: flex;
  min-width: 50%;
  > span {
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    margin-right: 10px;
    color: #a9a9a9;
    &.ActiveLinkMobileFriend {
      position: relative;
      color: var(--buttonFill) !important;
      ::after {
        content: "";
        background-color: var(--buttonFill);
        width: 50px;
        position: absolute;
        bottom: -6px;
        left: calc(50% - 25px);
        border-radius: 10px;
        height: 3px;
      }
    }
  }
`;
export const ContainerContent = styled.div`
  padding: 20px;
  max-width: 100%;
`;

export const TitleFindFriends = styled.div`
  text-align: justify;
  padding: 5px;
  > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: var(--fontBlack);
    &.SpanNameUserFindFriendsMobile {
      margin-left: 5px;
      color: blue;
      text-decoration: underline;
    }
  }
`;
export const SearchIcon = styled(SearchAlt2)`
  position: absolute;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  fill: var(--buttonFill);

  top: 8%;
  left: 8px;

  cursor: pointer;
`;

export const MySearchInput = styled.input`
  border-radius: 10px;
  width: 35%;
  height: 60px;
  outline: 0;
  padding: 10px 10px 10px 45px;
  border: 0;
  box-shadow: 0px 0px 44px 1px rgba(0, 0, 0, 0.25);

  ::-webkit-input-placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #a9a9a9;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;
export const CardContainer = styled.div`
  max-height: 50vh;
  min-height: 50vh;
  overflow-y: auto;
`;

export const MyCard = styled.div`
  box-shadow: 4.4819px 4.4819px 16.8071px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-radius: 8px;
  padding: 10px;
`;
export const NameUser = styled.div`
  width: 60%;
  @media (max-width: 350px) {
    width: 50%;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  margin-left: 10px;
  &.TrustMobile {
    width: 45%;
  }
`;
export const MyButtonConfirm = styled.div`
  > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 8.75px;
    color: var(--fontBlack);
  }
  background-color: var(--primary);
  border-radius: 3px;
  margin-left:5px;
  padding: 0px 10px 0px 10px;
  text-align: center;
`;
export const AcceptIcon = styled(CheckmarkDone)`
  width: 25px;
  height: 25px;
  color: var(--primary);
`;
export const RefuseIcon = styled(Delete)`
  width: 25px;
  height: 25px;
  color: red;
  margin-left: 8px;
`;
export const TrashIcon = styled(Trash)`
  width: 35px;
  height: 35px;
  color: red;
`;
