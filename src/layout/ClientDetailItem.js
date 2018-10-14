import React from 'react';
import PropTypes from 'prop-types';

const ClientDetailItem = ({
  avatar,
  firstName,
  lastName,
  title,
  company,
  email,
  phone,
  street,
  city,
  zipcode,
  country,
}) => (
  <div className="item">
    <div className="ui image">
      <img src={avatar} alt={`${firstName} ${lastName}`} />
    </div>
    <div className="content">
      <h2 className="header">
        {firstName}&nbsp;
        {lastName}
      </h2>
      <p className="meta">{title}</p>
      <p className="meta">{company}</p>
      <p className="description">
        Email:&nbsp;
        {email}
      </p>
      <p className="description">
        Phone:&nbsp;
        {phone}
      </p>
      <p className="description">
        Address:&nbsp;
        {street}&nbsp;
        {city}&nbsp;
        {zipcode}&nbsp;
        {country}
      </p>
    </div>
  </div>
);

ClientDetailItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default ClientDetailItem;
