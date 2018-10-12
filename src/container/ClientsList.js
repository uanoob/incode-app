import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getClients, getClientById } from '../store/actions';
import ClientItem from '../layout/ClientItem';

class ClientsList extends Component {
  componentDidMount() {
    const { getClientsConnect } = this.props;
    getClientsConnect();
  }

  onClientItemHandler = (e) => {
    const { getClientByIdConnect, clients } = this.props;
    getClientByIdConnect(clients, e.target.id);
  };

  render() {
    const { clients, search, filter } = this.props;
    const show = filter ? search : clients;

    return (
      <div className="ui items segment">
        {show.map(client => (
          <ClientItem
            key={client.contact.phone}
            id={client.contact.phone}
            avatar={client.general.avatar}
            firstName={client.general.firstName}
            lastName={client.general.lastName}
            title={client.job.title}
            onClick={this.onClientItemHandler}
          />
        ))}
      </div>
    );
  }
}

ClientsList.defaultProps = {
  clients: [],
  search: [],
};

ClientsList.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        general: PropTypes.shape({
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
        }),
        job: PropTypes.shape({
          company: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
        contact: PropTypes.shape({
          email: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
        }),
        address: PropTypes.shape({
          street: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
        }),
      }),
    ),
  ),
  search: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        general: PropTypes.shape({
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
        }),
        job: PropTypes.shape({
          company: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
        contact: PropTypes.shape({
          email: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
        }),
        address: PropTypes.shape({
          street: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
        }),
      }),
    ),
  ),
  getClientsConnect: PropTypes.func.isRequired,
  getClientByIdConnect: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  clients: state.clients.data,
  search: state.clients.search,
  filter: state.clients.filter,
});

const mapDispatchToProps = {
  getClientsConnect: getClients,
  getClientByIdConnect: getClientById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsList);
