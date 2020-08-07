import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 105px;
    display:flex;
    flex-direction: column;
    background-color: var(white);
    width:100%;
    
    overflow-x: hidden;
    overflow-y:hidden;

`;

export const Container = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    height:570px;
    background-color:var(--background-container);
    &.withoutBg{
        background-color:white;
    }
    &.plataforms{
        background-color:white;
    }

    margin-bottom: 105px;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;
export const ImageContent = styled.div`
    margin-top: 105px;
`;
export const TitleContent = styled.div`
    margin-top: 110px;

`;
export const TextContent = styled.div`
    width: 30%;
    text-align:justify;
    margin-top: 170px;
`;