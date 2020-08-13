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
  position: relative;
  > a {
    padding: 4px 12px;
    color: black !important;
    cursor: pointer;
  }

  &.active {
    &::after {
      position: absolute;
      width: calc(100%);
      height: 5px;
      content: "";

      background-color: #00d446;
      border-radius: 2.5px;
    }
  }
`;
