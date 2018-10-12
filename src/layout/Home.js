import React from 'react';
import ClientSearch from '../container/ClientSearch';
import ClientsList from '../container/ClientsList';
import ClientDetail from '../container/ClientDetail';

const Home = () => (
  <div className="ui column grid container">
    <div className="eight wide column">
      <ClientSearch />
      <ClientsList />
    </div>
    <div className=" eight wide column">
      <ClientDetail />
    </div>
  </div>
);

export default Home;
