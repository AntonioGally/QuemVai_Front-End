import React from 'react';

import { Container, Square, TitleSquare, TextSquare } from './style';

const Squares: React.FC = () => {
  return (
      <Container>
          <Square>
              <TitleSquare>
                Lorem Impsum
              </TitleSquare>
              <TextSquare>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </TextSquare>
          </Square>
          <Square>
              <TitleSquare>
                Lorem Impsum
              </TitleSquare>
              <TextSquare>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </TextSquare>
          </Square>

          <Square>
        <TitleSquare>Lorem Impsum</TitleSquare>
        <TextSquare>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </TextSquare>
      </Square>

      <Square>
        <TitleSquare>Lorem Impsum</TitleSquare>
        <TextSquare>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </TextSquare>
      </Square>
      <Square>
        <TitleSquare>Lorem Impsum</TitleSquare>
        <TextSquare>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </TextSquare>
      </Square>

      </Container>
  );
}

export default Squares;