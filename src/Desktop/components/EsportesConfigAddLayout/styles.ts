import styled from "styled-components";

export const MyContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: var(--primary);
  border-radius: 15px;
  overflow-y: scroll;
  padding: 20px;
`;
export const MyWrapper = styled.div`
  @media (min-width: 1400px) {
    width: 70%;
  }
  @media (max-width: 1399px) {
    width: 90%;
  }
`;
