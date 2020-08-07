import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;
export const Square = styled.div`
    width:250px;
    height:250px;
    background-color: var(--background-container);
    :nth-child(n+2):nth-child(-n+5){
        margin-left: 85px;
    }
    cursor:pointer;
    
    border-radius:15px;
    display:flex;
    flex-direction:column;

    &:hover{
        background-color: var(--background-container2);
        transition:0.2s ease-in-out;
    }

`;


export const TitleSquare = styled.div`
    text-align:center;
    font-family: 'Roboto Regular';
    font-size: 22px;
    margin-top: 30px;
    

`;
export const TextSquare = styled.div`
    text-align:justify;
    font-family: 'Roboto Regular';
    padding:30px 30px 0px;
    font-size: 16px;
`;