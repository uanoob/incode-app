import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getClients } from '../store/actions';
import ClientItem from '../layout/ClientItem';

class ClientsList extends Component {
  componentDidMount() {
    this.props.getClients();
  }

  onClientItemHandler = e => {
    console.log(e.target.id);
  };

  render() {
    const { clients } = this.props;
    return (
      <div className="ui items">
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
  clients: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  clients: state.clients.data,
});

const mapDispatchToProps = { getClients };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsList);
