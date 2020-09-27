import styled, { css } from "styled-components";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { AccountBox } from "@styled-icons/material/AccountBox";
import { Key } from "@styled-icons/boxicons-regular/Key";
import { InsertPhoto } from "@styled-icons/material/InsertPhoto";
import { HistoryEdu } from "@styled-icons/material-outlined/HistoryEdu";

export const MyTitleForm = styled.h3`
  margin-top: 5%;
  margin-bottom:8%;
  font-family: "Poppins";
  color: var(--fontBlack);
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MyForm = styled.div`
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    &.firstColumn {
      width: 100%;
    }
  }
`;
export const MyLableText = styled.h5`
  font-family: "Poppins";
  color: var(--fontBlack);
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const MyButton = styled.button`
  background-color: var(--buttonFill);
  border-radius: 6.5px !important;
  color: var(--fontWhite);
  width: 30%;
  padding: 10px;

  &:hover {
    background-color: var(--buttonFill);
    opacity: 0.8;
    color: var(--fontWhite);
    transition: all 0.5s ease-in-out;
  }
`;

export const EditIcon = styled(Edit)`
  width: 28px;
  height: 28px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  margin-left: 20px;
`;

var sideBarIcons = css`
  width: 42px;
  height: 42px;
  fill: var(--fontWhite);
  flex-shrink: 0;
  margin-right: 10px;
`;

export const AccountIcon = styled(AccountBox)`
  ${sideBarIcons};
`;

export const PasswordIcon = styled(Key)`
  ${sideBarIcons};
`;
export const PhotoIcon = styled(InsertPhoto)`
  ${sideBarIcons};
`;
export const HistoricIcon = styled(HistoryEdu)`
  ${sideBarIcons};
`;
