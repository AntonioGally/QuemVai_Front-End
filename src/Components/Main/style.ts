import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: var(--background-container);
    width:100%;
    
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    overflow-x: hidden;
    overflow-y:hidden;
    > h1{
        text-align:center;
    }
`;