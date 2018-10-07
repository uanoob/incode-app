import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchClients } from '../store/actions';

class ClientSearch extends Component {
  searchInputHandler = e => {
    // console.log(e.target.value);
    const { data, searchClients } = this.props;
    searchClients(data, e.target.value);
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
};

const mapStateToProps = state => ({
  data: state.clients.data,
});

const mapDispatchToProps = { searchClients };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientSearch);
