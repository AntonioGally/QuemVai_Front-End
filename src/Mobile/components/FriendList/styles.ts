import styled from "styled-components";

export const Container = styled.div`

  background-color: var(--primary);
  height: 100%;
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 24px; 
  padding: 10px;
`;
export const UserList = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 20px;
  padding-left:10px;
`;
export const WrapperUser = styled.div`
  margin-right: 15px;
  max-width:70px;
`;
export const UserButton = styled.div``;
export const NameUser = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  width:100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:center;
`;
