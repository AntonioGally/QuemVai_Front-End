import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { AddUser } from "@styled-icons/entypo/AddUser";

export const TitleFindFriends = styled.div`
  text-align: justify;
  padding: 5px;
  > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: var(--fontBlack);
  }
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

export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: var(--fontBlack);
  margin: 15px 10px 0 10px;
`;
export const AddUserIcon = styled(AddUser)`
  width: 35px;
  height: 35px;
  color: var(--primary);
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