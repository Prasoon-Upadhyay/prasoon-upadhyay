import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/Main';
import routes from './routes';

import { tabs } from './data';
import contactData from './data/json/contact.json';

const App: React.FC = () => (
  <BrowserRouter>
    <MainLayout tabs={tabs} contactData={contactData}>
      {routes}
    </MainLayout>
  </BrowserRouter>
);

export default App;
