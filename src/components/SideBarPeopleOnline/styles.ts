import styled from "styled-components";

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
