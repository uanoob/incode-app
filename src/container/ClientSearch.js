import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchClients, isFiltered } from '../store/actions';

class ClientSearch extends Component {
  searchInputHandler = e => {
    const { data, searchClients, isFiltered } = this.props;
    searchClients(data, e.target.value);
    isFiltered(true);
  };

  render() {
    return (
      <div className="ui fluid icon input">
        <input
          onChange={this.searchInputHandler}
          type="text"
          placeholder="Search users..."
        />
        <i className="search icon" />
      </div>
    );
  }
}

ClientSearch.propTypes = {
  searchClients: PropTypes.func.isRequired,
  isFiltered: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.clients.data,
});

const mapDispatchToProps = { searchClients, isFiltered };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientSearch);
