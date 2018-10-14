import React from 'react';
import PropTypes from 'prop-types';
import './ClientItem.css';

const ClientItem = ({
  id, avatar, firstName, lastName, title, onClick,
}) => (
  <div
    className="item item-custom"
    id={id}
    role="button"
    tabIndex="0"
    onClick={onClick}
    onKeyPress={onClick}
  >
    <div className="ui mini image">
      <img src={avatar} alt={`${firstName} ${lastName}`} />
    </div>
    <div className="content">
      <h2 className="header">
        {firstName}&nbsp;
        {lastName}
      </h2>
      <p className="description">{title}</p>
    </div>
  </div>
);

ClientItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClientItem;
