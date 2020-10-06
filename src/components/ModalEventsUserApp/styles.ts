import styled from "styled-components";
import { Compass } from "@styled-icons/fa-solid/Compass";
import { Exit } from "@styled-icons/boxicons-regular/Exit";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
export const MyTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  margin: 4%;
`;
export const MyWrapperCards = styled.div`
  height: 600px;
  padding: 15px;
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
`;
export const MyCards = styled.div`
  background-color: var(--fontWhite);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 5%;
  padding: 20px;
  width: 100%;
`;
export const CompassIcon = styled(Compass)`
  width: 100%;
  height: 100%;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
`;
export const ExitIcon = styled(Exit)`
  width: 48%;
  height: 48%;
  color: var(--primary);
  fill: var(--primary);
  flex-shrink: 0;
  cursor: pointer;
`;
export const SearchSpaceIcon = styled(SearchAlt)`
  width: 48%;
  height: 48%;
  color: var(--fontBlack);
  fill: var(--fontBlack);
  flex-shrink: 0;
  cursor: pointer;
`;
export const SearchIcon = styled(SearchAlt)`
  width: 35px;
  height: 35px;
  fill: var(--fontBlack);
  flex-shrink: 0;
  position: absolute;
  left: calc(100% - 40px);
  cursor: pointer;
`;
export const TextContent = styled.div`
  > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    margin-right: 10px;
  }
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MyTileSpaceInfo = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
`;
export const MyTextContentSpaceInfo = styled.div`
  margin-left: 4%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MyTextAreaSpaceInfo = styled.div`
  margin-left: 4%;
  > div > textarea {
    border: 1px solid black;
  }
`;
export const WrapperSports = styled.div`
  margin-left: 4%;
  height: 200px;
  width: 100%;
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
