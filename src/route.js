import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Introducao from './Pages/Introducao/Introducao';
import Contato from './Pages/Contato/Contato';
import Sobre from './Pages/QuemSou/QuemSou';
import Portifolio from './Pages/Portifolio/Portifolio';
import Servicos from './Pages/Serviços/Servicos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Introducao} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/portifolio" component={Portifolio} />
      <Route path="/Contato" component={Contato} />
      <Route path="/Servicos" component={Servicos} />
    </Switch>
  );
}
