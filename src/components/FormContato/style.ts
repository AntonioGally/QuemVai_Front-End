import styled from "styled-components";

export const MyContainer = styled.div`

  border-radius: 15px;
  margin-top: 8%;
  background-color: var(--background);
  padding: 8% 8% 4% 8%;
  margin-bottom: 5%;
  border-top: 2px solid black; 
`;

export const MyForm = styled.div`
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    &.firstColumn {
      width: 60%;
    }
  }
`;
export const MyCol = styled.div`
  @media (min-width: 1200px) {
    width: 50%;
  }
`;
export const Social = styled.div`
  margin-top: 3%;
  margin-left: 5%;
`;
export const MyTitleForm = styled.h3`
    font-weight: 600;
    font-size:40px;
    font-family:'Poppins';
    margin-bottom:8%;
    text-align:center;
    position:relative;

    
    &::before{
        margin-top:20px;
        width: calc(100% + 100px);
        @media (max-width:768px){
            width: 100%;
            left:0;
        }
        height: 3px;
        position: absolute;
        left: -50px;
        top: 100%;
        background-color: var(--primary);
        border-radius:5px;
        content: '';         
        box-shadow: 2px 2px 4px #000000;   
    }

    @media (max-width:768px){
        font-size:28px;
    }
    
`;
export const MyRow = styled.div`
    @media (max-width:768px){
        margin: 20% 0;
    }
    margin: 5% 0;
`;