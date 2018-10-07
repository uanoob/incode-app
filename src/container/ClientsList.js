import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getClients, getClientById } from '../store/actions';
import ClientItem from '../layout/ClientItem';

class ClientsList extends Component {
  componentDidMount() {
    this.props.getClients();
  }

  onClientItemHandler = e => {
    this.props.getClientById(this.props.clients, e.target.id);
  };

  render() {
    const { clients, search, filter } = this.props;
    let show;
    filter ? (show = search) : (show = clients);

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

ClientsList.propTypes = {
  getClients: PropTypes.func.isRequired,
  getClientById: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired,
  search: PropTypes.array.isRequired,
  filter: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  clients: state.clients.data,
  search: state.clients.search,
  filter: state.clients.filter,
});

const mapDispatchToProps = { getClients, getClientById };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsList);
