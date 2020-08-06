import styled from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

export const Container = styled.div`
  width: 100%;
  display: flex;

  overflow-y: auto;
  overflow-x:hidden;
`;

export const Search = styled.div`
  margin-left: 35px;
  margin-top: 30px;
  `;

export const SearchInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 16px;
  background-color: white;
  font-family: "Roboto regular";
  font-size: 16px; 
  position:relative;
  
  ::-webkit-input-placeholder {
    color: var(--placeholder);
    padding-left: 11px;
    font-family: "Roboto regular";
    font-size: 16px;
}

&:focus,
&:hover {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: #ececec;
}
&:focus{
    background-color: #bbbbbb;
    transition: 0.5s ease-in-out;
}

~ svg {

    cursor:pointer;
    position:relative;
    left:-38px;
}
`;

export const SearchIcon = styled(SearchAlt)`
  width: 28px;
  height: 28px;
  fill: black;
  `;


export const Nav = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
  
    position:absolute;
`;
export const Banner = styled.div`


`;

export const Avatar = styled.div`
    margin-top:10px;
    margin-right:10px;
    width: 75px;
    height: 75px;
    fill:white;
    cursor:pointer;
`;
