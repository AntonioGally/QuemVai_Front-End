import React from "react";
import { useParams } from "react-router-dom";

// import { Container } from './styles';

const EventInfoContent: React.FC = () => {
  const { id_Event }: any = useParams();
  return (
    <div>
      <h3>Mané {id_Event}</h3>
    </div>
  );
};

export default EventInfoContent;
