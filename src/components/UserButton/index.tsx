import React from 'react';


import { Button } from './styles';
import user from '../../img/icones/user.svg';

export interface Props{
    isOnline?: boolean;
}

const UserButton: React.FC<Props>= ({
    isOnline
}) => {
  return (
      <Button isOnline={isOnline}>
        <img src={user} alt="Usuário" />
      </Button>
      
  );
}

export default UserButton;