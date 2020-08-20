import React from 'react';

import { Container } from './styles';

import HeaderApp from '../../components/HeaderApp';
import GoogleMaps from '../../components/GoogleMaps';
import PeopleOnline from '../../components/PeopleOnline';

const MainAplication: React.FC = () => {
  return (
      <div>
          <Container>
            <div className="CellPhone" style={{padding:'0'}}>
                <div className="row">
                    <HeaderApp />
                </div>

                <div className="row">
                    <GoogleMaps />
                </div>

                <div className="row">
                    <PeopleOnline />
                </div>
            </div>

            <div className="Desktop">
                <div className="col" style={{padding:'0'}}>
                    <HeaderApp />
                </div>
                <div className="col">
                    <GoogleMaps />
                </div>
                <div className="col">
                    <PeopleOnline />
                </div>
            </div>
          </Container>
      </div>
  );
}

export default MainAplication;