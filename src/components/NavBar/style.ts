import styled from "styled-components";

export const MyNavBar = styled.div`
  @media only screen and (min-width: 1200px) {
    margin-top: 9.125em;
  }
  margin-top: 4em;
`;

export const MyLink = styled.div`
  @media only screen and (min-width: 1200px) {
    &.WithoutMarginL {
      margin-left: 0 !important;
    }

    font-size: 28px;
    margin-left: 8.125em;
  }

  font-family: "Roboto Light";
  font-size: 1em;
  > a {
    color: black !important;
    cursor: pointer;
  }
`;
