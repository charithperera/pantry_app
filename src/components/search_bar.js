import React, { Component } from 'react';
import { search } from '../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './search_bar.css';

class SearchBar extends Component {
  onInputChange(term) {
    this.props.search(term);
  }

  render() {
     return (
       <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="<Search Food Here>"
        />
       </div>
     )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
