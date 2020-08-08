import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  background-color: var(white);
  width: 100%;

  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 570px;
  background-color: var(--background-container);
  &.withoutBg {
    background-color: white;
  }

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ImageContent = styled.div`
  margin-top: 105px;
`;

export const TitleContent = styled.div`
  margin-top: 110px;

  &.plataforms {
    margin: 50px auto;
  }
`;
export const TextContent = styled.div`
  width: 30%;
  text-align: justify;
  margin-top: 170px;
`;

export const ContainerPlataform = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  height: 570px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom:150px;
`;

export const ImageContentPlataform = styled.div`
  > img {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
`;

export const TitleContentPlataform = styled.div`
    font-family:"Roboto Regular";
    font-size:26px;
    margin-top:30px;
    margin-bottom:30px;
`;
export const TextContentPlataform = styled.div`
    max-width:480px;
    text-align:justify;
`;

export const PlataformWrapper = styled.div`
  display: flex;
`;
export const Plataform = styled.div`
  display: flex;
  flex-direction: column;

  align-items:center;
  :nth-child(n + 2):nth-child(-n + 3) {
    margin-left: 200px;
  }
`;
export const ContainerFooter = styled.div`
    width:100%;
    height:70px;
    background-color:var(--background-container);

`;