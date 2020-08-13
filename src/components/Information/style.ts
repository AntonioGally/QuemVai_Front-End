import styled from "styled-components";

export const MyRow = styled.div`
	border-radius:15px;
  background-color: #b8ffee;
	&.WithoutBG{
		background-color:white;
	}
`;

export const MyCol = styled.div`
  margin-top: 4%;
	&.text{
		padding:0 5%;
	}

  @media (min-width: 1200px) {
    &.text {
      word-break: normal;
      max-width: 45% !important;
    }
  }
`;

export const TitleContent = styled.h1`
  font-family: "Roboto Regular";
	&.plataforms{
		text-align:center;
	}
`;
export const TextContent = styled.div`
	@media (max-width:500px){
		font-size: 16px;
	}
  margin-top: 3%;
  font-family: "Roboto Regular";
  font-size: 20px;
  text-align: justify;
`;
