import styled, {css} from 'styled-components';


import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { Compass } from "@styled-icons/boxicons-regular/Compass";
import { Exit } from "@styled-icons/boxicons-regular/Exit";

export const ArrowBackIcon = styled(ArrowBack)`
  width:30px;
  height:30px;
  fill:var(--fontBlack);
  color:var(--fontBlack);
  flex-shrink:0;
  margin:10px 0 0 10px;
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: var(--fontBlack);
`;
export const ContainerSvg = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  z-index: -20;
`;
export const WrapperCards = styled.div`
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 70vh;
`;
export const MyCard = styled.div`
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--fontWhite);
  padding: 10px;
  margin: 3%;
  border-radius: 15px;
`;

export const SubTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
export const TextContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  margin-left: 10px;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

var iconsStyle = css`
  width: 65px;
  height: 65px;
  fill: var(--buttonFill);
  color: var(--buttonFill);
  cursor: pointer;
`;



export const SearchIcon = styled(SearchAlt)`
  width:30px;
  height:30px;
  ${iconsStyle}
`;
export const ExitIcon = styled(Exit)`
  width:30px;
  height:30px;
  ${iconsStyle}
`;
export const CompassIcon = styled(Compass)`
  ${iconsStyle}
`;
