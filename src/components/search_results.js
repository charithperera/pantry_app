import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchResultItem from './search_result_item';
import './search_results.css';

class SearchResults extends Component {
  renderResults() {
    if (this.props.results) {
      return this.props.results.map((food) => {
        return (
          <SearchResultItem food={food} key={food.id}/>
        )
      })
    }
  }

  render() {
     return (
       <div className="food-list">
         <ul className="list-group">
           {this.renderResults()}
         </ul>
       </div>
     )
  }
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ search }, dispatch);
// }

function mapStateToProps(state) {
  return {
    results: state.diary.results
  }
}

export default connect(mapStateToProps)(SearchResults);
