import React from 'react';

import { MyButton } from './styles';
export interface Props {
  text : string;
}

const elements: React.FC<Props> = ({text}) => {
  return (
    <div>
      <MyButton>
        {text}
      </MyButton>
    </div>
  );
}

export default elements;