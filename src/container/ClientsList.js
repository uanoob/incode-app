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
    console.log(e.target.id);
    this.props.getClientById(this.props.clients, e.target.id);
  };

  render() {
    const { clients } = this.props;
    return (
      <div className="ui items segment">
        {clients.map(client => (
          <ClientItem
            key={client.id}
            id={client.id}
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
};

const mapStateToProps = state => ({
  clients: state.clients.data,
});

const mapDispatchToProps = { getClients, getClientById };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsList);
