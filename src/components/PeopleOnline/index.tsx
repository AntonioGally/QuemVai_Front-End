import React from "react";
import UserButton from "../UserButton";
import './styles.css'
// import { Container } from './styles';

const PeopleOnline: React.FC = () => {
  return (
    <div className="row MyRowPeopleOnlineApp ">
     <UserButton isOnline={true} />
     <UserButton isOnline={true} />
     <UserButton isOnline={true} />
     <UserButton isOnline={true} />
     <UserButton isOnline={true} />
    </div>
  );
};

export default PeopleOnline;
