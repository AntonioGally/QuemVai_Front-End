import React from 'react';
import UserButton from '../UserButton';
import { Container } from './styles';

const SideBarPeopleOnline: React.FC = () => {
  return (
    <Container>
    <div style={{backgroundColor:'#B8FFEE'}}>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Davi Arce'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Matheus Oliveira'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Pedro Dambrósio'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Isabella Oliveira'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Lucas Pissuto'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Lucas Pissuto'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Lucas Pissuto'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Lucas Pissuto'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Lucas Pissuto'}/>
      </div>
      <div className="row" style={{margin:'30px 0'}}>
        <UserButton isOnline={true} userName={'Lucas Pissuto'}/>
      </div>
      
    </div>
    </Container>
  );
}

export default SideBarPeopleOnline;