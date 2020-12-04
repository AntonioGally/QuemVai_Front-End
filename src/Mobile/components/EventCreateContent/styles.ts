import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Star } from "@styled-icons/entypo/Star";

export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  fill: var(--fontBlack);
  color: var(--fontBlack);
  flex-shrink: 0;
  margin: 10px 0 0 10px;
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: var(--fontBlack);
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ContainerSvg = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  z-index: -20;
`;

export const StarIcon = styled(Star)`
  width: 30px;
  height: 30px;  
  flex-shrink: 0;
  margin: 0 0 0 10px;
  z-index: 10;
  > path {
    stroke: var(--fontBlack);
    stroke-width: 1px;
  }
`;
export const SubTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: var(--fontBlack);
  margin-right: 15px;
`;
export const TextContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: var(--fontBlack);
  max-width: 65%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ComboBox = styled.div`
  min-width: 70%;
`;
export const TextArea = styled.div`
  margin-left: auto;
  margin-top: 20px;
  > div > textarea {
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px !important;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }
`;
