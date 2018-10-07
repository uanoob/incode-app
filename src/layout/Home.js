import React from 'react';
// import PropTypes from 'prop-types';
import ClientSearch from '../container/ClientSearch';
import ClientsList from '../container/ClientsList';
import ClientDetail from '../container/ClientDetail';

const Home = () => {
  return (
    <div className="ui column grid container">
      <div className="six wide column">
        <ClientSearch />
        <ClientsList />
      </div>
      <div className=" ten wide column">
        <ClientDetail />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
