import React from "react";

import { MyButton, MyButtonFill } from "./styles";
export interface Props {
  text: string;
  fill?: boolean;
}

export function ButtonFill(text: any) {
  return (
    <div>
      <MyButtonFill>{text}</MyButtonFill>
    </div>
  );
}

// import { Container } from './styles';

const elements: React.FC<Props> = ({ text, fill }) => {
  if (fill) {
    return (
      <div>
        <MyButtonFill>{text}</MyButtonFill>
      </div>
    );
  }
  return (
    <div>
      <MyButton>{text}</MyButton>
    </div>
  );
};

export default elements;
