import styled from "styled-components";

export const MyHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  >a > span {
    font-size: 26px;
    color: var(--fontWhite);
    font-family: "Poppins";
    float: right;
    padding: 10px 20px;
    cursor:pointer;
  }
  > h3 {
    font-size: 26px;
    color: var(--fontWhite);
    font-family: "Poppins";
    float: right;
    padding: 10px 20px;
    font-weight:400;
  }
`;
