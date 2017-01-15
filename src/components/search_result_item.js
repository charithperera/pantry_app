import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFood, viewFood } from '../actions/index';
import './search_result_item.css';

class SearchResultItem extends Component {
  addFood() {
    this.props.addFood(this.props.food);
  }

  viewFood() {
    this.props.viewFood(this.props.food);
  }

  render() {
     return (
       <li onClick={this.viewFood.bind(this)} className="list-group-item food-item">
         <div className="row food-info">
           <div className="col-md-12">
             <h5>{this.props.food.brand} {this.props.food.name}</h5>
           </div>
         </div>
         <div className="row food-nutrition">
           <div className="col-md-2 col-md-offset-1">
             <h6>Calories</h6>{this.props.food.calories}
           </div>
           <div className="col-md-2">
             <h6>Protein</h6>{this.props.food.protein}
           </div>
           <div className="col-md-2">
             <h6>Carbs</h6>{this.props.food.carbs}
           </div>
           <div className="col-md-2">
             <h6>Fat</h6>{this.props.food.fat}
           </div>
           <div className="col-md-2">
             <button onClick={this.addFood.bind(this)} type="button" className="btn btn-success add">Add</button>
           </div>
         </div>
       </li>
     )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFood, viewFood }, dispatch);
}

// function mapStateToProps(state) {
//   return {
//     results: state.search.results
//   }
// }

export default connect(null, mapDispatchToProps)(SearchResultItem);
