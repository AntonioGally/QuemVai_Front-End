import styled, { css } from "styled-components";

import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { UserDetail } from "@styled-icons/boxicons-solid/UserDetail";
import { ReceiptCutoff } from "@styled-icons/bootstrap/ReceiptCutoff";

import { UserShield } from "@styled-icons/fa-solid/UserShield";
import { UserCheck } from "@styled-icons/boxicons-solid/UserCheck";
import { PlaylistAddCheck } from "@styled-icons/material/PlaylistAddCheck";

import { Send } from "@styled-icons/ionicons-sharp/Send";

import { DeleteForever } from "@styled-icons/material/DeleteForever";

import { PersonDelete } from "@styled-icons/evaicons-solid/PersonDelete";
import { DoneAllOutline } from "@styled-icons/evaicons-outline/DoneAllOutline";

import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

import { AddUser } from "@styled-icons/entypo/AddUser";

export const MyTitleForm = styled.h3`
  margin-top: 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  color: var(--fontBlack);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const MyLableText = styled.h5`
  font-family: "Poppins";
  color: var(--fontBlack);
  font-size: 28px;
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  &.userInfo {
    color: var(--buttonFill);
    margin-bottom: 10px;
  }
`;

export const MyButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.6;
    transition: all 0.3s ease-in;
  }
`;

export const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 500px;
`;

export const MyRowPeople = styled.div`
  margin: 7% 0px 0px 0px;
  justify-content: center;
  display: flex;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MyCard = styled.div`
  width: 100%;
  height: 400px;
  background: var(--fontWhite);
  box-shadow: 8px 8px 30px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  overflow: hidden;
`;
export const InviteIcon = styled(Send)`
  width: 40px;
  height: 40px;
  fill: var(--fontWhite);
  flex-shrink: 0;
  cursor: pointer;
`;

var SideBarIcons = css`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  color: var(--fontWhite);
  flex-shrink: 0;
`;

export const SendInviteIcon = styled(UserPlus)`
  ${SideBarIcons}
`;
export const InvitesSendedIcon = styled(UserDetail)`
  ${SideBarIcons}
`;
export const InvitesReceivedIcon = styled(ReceiptCutoff)`
  ${SideBarIcons}
`;

export const TrustAddIcon = styled(UserShield)`
  ${SideBarIcons}
`;
export const TrustReceiveIcon = styled(UserCheck)`
  ${SideBarIcons}
`;
export const TrustSendedIcon = styled(PlaylistAddCheck)`
  ${SideBarIcons}
`;

export const MyCardInvitesSended = styled.div`
  background-color: var(--fontWhite);
  border-radius: 15px;
  box-shadow: 8.71601px 8.71601px 32.685px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 15px;
  margin-bottom: 5%;
`;

export const ImageUser = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-shrink: 0;
`;
export const NameUser = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CancelIcon = styled(DeleteForever)`
  height: 55px;
  width: 55px;
  fill: #ed461d;
  color: #ed461d;
  flex-shrink: 0;
  cursor: pointer;
`;

export const AcceptIcon = styled(DoneAllOutline)`
  height: 55px;
  width: 55px;
  fill: var(--primary);
  color: var(--primary);
  flex-shrink: 0;
  cursor: pointer;
`;
export const RefuseIcon = styled(PersonDelete)`
  height: 55px;
  width: 55px;
  fill: #ed461d;
  color: #ed461d;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 10px;
`;

export const SearchIcon = styled(SearchAlt2)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  cursor: pointer;
`;
export const ArrowBackIcon = styled(ArrowBack)`
  width: 35px;
  height: 35px;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  cursor: pointer;
  flex-shrink: 0;
  margin: 4% 0 0 5%;
`;

export const AddUserIcon = styled(AddUser)`
  width: 65px;
  height: 65px;
  fill: var(--buttonFill);
  color: var(--buttonFill);
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 55px;
    height: 55px;
  }
`;

export const MyCardLisPeople = styled.div`
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--fontWhite);
  padding: 10px;
  margin: 3%;
  border-radius: 15px;
`;
