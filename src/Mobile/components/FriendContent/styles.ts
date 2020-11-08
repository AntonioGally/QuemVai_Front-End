import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

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
      color: var(--buttonFill) !important;
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
    font-size: 14px;
    font-weight: 500;
    color: var(--fontBlack);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;
