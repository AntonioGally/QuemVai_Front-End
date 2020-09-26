import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  max-height: 100vh;
  padding: 0;
  /* > div {
    position: relative;
  } */
  > div > div > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 1300px) {
      width: 75px;
      height: 75px;
    }
  }
`;

export const MyRowPeople = styled.div`
  margin: 7% 0px 0px 0px;
  justify-content: center;
  display: flex;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Poppins";
  font-size: 15pt;
  color: var(--fontBlack);

  cursor: pointer;

  /* &::after {
    width: 9px;
    height: 9px;
    position: absolute;
    background-color: green;
    border-radius: 50%;
    content: "";
  } */
`;
