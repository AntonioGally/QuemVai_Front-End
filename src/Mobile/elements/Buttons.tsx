import React from "react";

import { MyButton, MyButtonFill } from "./styles";
export interface Props {
  text: string;
  submit?: boolean;
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

const elements: React.FC<Props> = ({ text, fill, submit }) => {
  if (fill) {
    if (submit) {
      return (
        <div>
          <MyButtonFill type="submit">{text}</MyButtonFill>
        </div>
      );
    } else {
      return (
        <div>
          <MyButtonFill>{text}</MyButtonFill>
        </div>
      );
    }
  }
  return (
    <div>
      {submit ? (
        <MyButton type="submit">{text}</MyButton>
      ) : (
        <MyButton>{text}</MyButton>
      )}
    </div>
  );
};

export default elements;
