import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getClients } from '../store/actions';

class ClientsList extends Component {
  componentDidMount() {
    this.props.getClients();
  }
  render() {
    return <div>ClientsList</div>;
  }
}

ClientsList.propTypes = {
  getClients: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = { getClients };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsList);
