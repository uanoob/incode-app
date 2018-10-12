import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchClients, isFiltered } from '../store/actions';

class ClientSearch extends Component {
  searchInputHandler = (e) => {
    const { data, searchClientsConnect, isFilteredConnect } = this.props;
    searchClientsConnect(data, e.target.value);
    isFilteredConnect(true);
  };

  render() {
    return (
      <div className="ui fluid icon input">
        <input onChange={this.searchInputHandler} type="text" placeholder="Search users..." />
        <i className="search icon" />
      </div>
    );
  }
}

ClientSearch.defaultProps = {
  data: [],
};

ClientSearch.propTypes = {
  data: PropTypes.arrayOf(
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
  searchClientsConnect: PropTypes.func.isRequired,
  isFilteredConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.clients.data,
});

const mapDispatchToProps = {
  searchClientsConnect: searchClients,
  isFilteredConnect: isFiltered,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientSearch);
