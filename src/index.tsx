import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Contato from './Pages/Contato';
import Documentos from './Pages/Documentos';

import { Route, HashRouter } from 'react-router-dom'

ReactDOM.render((
  
  <HashRouter>    
    <Route exact path="/" component={App} />
    <Route path="/Contato" component={Contato} />  
    <Route path="/Documentos" component={Documentos} />   
  </HashRouter>
  
  ), document.getElementById('root')
);

