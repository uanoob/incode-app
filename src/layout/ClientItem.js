import React from 'react';
import PropTypes from 'prop-types';

const ClientItem = ({ id, avatar, firstName, lastName, title, onClick }) => {
  return (
    <div className="item">
      <div className="ui mini image">
        <img src={avatar} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="content">
        <a href="#">
          <h2 className="header" id={id} onClick={onClick}>
            {firstName} {lastName}
          </h2>
        </a>
        <p className="description">{title}</p>
      </div>
    </div>
  );
};

ClientItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ClientItem;
