import styled from "styled-components";

export const Container = styled.div`
    margin-top:90px;
    margin-bottom: 100px;
    display:flex;
    flex-direction:column;
    

`;
export const NavLinks = styled.div`
    > ul {
       display:flex;
        list-style:none;
        justify-content: center;
    }

    > ul li {
        display:inline;
        margin: 0 70px;   
        font-family: 'Roboto Regular';
        font-size: 26px;
        cursor: pointer;
    }

    
`;