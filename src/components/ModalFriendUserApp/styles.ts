import styled, { css } from "styled-components";

import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { UserDetail } from "@styled-icons/boxicons-solid/UserDetail";
import { ReceiptCutoff } from "@styled-icons/bootstrap/ReceiptCutoff";

import { UserShield } from "@styled-icons/fa-solid/UserShield";
import { UserCheck } from "@styled-icons/boxicons-solid/UserCheck";
import { PlaylistAddCheck } from "@styled-icons/material/PlaylistAddCheck";

import {Send} from "@styled-icons/ionicons-sharp/Send";

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
  margin-right:20px;

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
  border:none;
  width:40px;
  height:40px;
  :focus{
    outline:none;
  }
  :hover {
    opacity:0.6;
    transition:all .3s ease-in;
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
  width:100%;
  height:400px;
  background:var(--fontWhite);
  box-shadow: 8px 8px 30px rgba(0, 0, 0, 0.3);
  border-radius:30px; 
  overflow:hidden;
`;
export const InviteIcon = styled(Send)`
  width:40px;
  height:40px;
  fill:var(--fontWhite);
  flex-shrink: 0;
  cursor:pointer;
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
