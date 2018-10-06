import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ClientDetailItem from '../layout/ClientDetailItem';

class ClientDetail extends Component {
  renderClientDetail = client =>
    client ? (
      <div className="ui items segment">
        <ClientDetailItem
          avatar={client.general.avatar}
          firstName={client.general.firstName}
          lastName={client.general.lastName}
          title={client.job.title}
          company={client.job.company}
          email={client.contact.email}
          phone={client.contact.phone}
          street={client.address.street}
          city={client.address.city}
          zipcode={client.address.zipCode}
          country={client.address.country}
        />
      </div>
    ) : null;

  render() {
    const { client } = this.props;
    return <div>{this.renderClientDetail(client)}</div>;
  }
}

ClientDetail.propTypes = {};

const mapStateToProps = state => ({
  client: state.clients.client,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientDetail);
