import React from 'react';
// import PropTypes from 'prop-types';
import ClientsList from '../container/ClientsList';

const Home = () => {
  return (
    <div className="ui two column grid container">
      <div className="column">
        <ClientsList />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
