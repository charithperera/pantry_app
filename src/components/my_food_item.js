import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFood, viewFood } from '../actions/index';
import './search_result_item.css';

class SearchResultItem extends Component {
  viewFood() {
    this.props.viewFood(this.props.food);
  }

  render() {

    const entry = this.props.entry;
    const food = this.props.entry.food;
    debugger;
     return (
       <li className="list-group-item">
         <div className="row food-info">
           <div className="col-md-12">
             <h5>{food.brand} {food.name}</h5>
           </div>
         </div>
         <div className="row food-nutrition">
           <div className="col-md-12">
             <div className="row">
               <div className="col-md-4">
                 <input min="1" type="number" defaultValue="1"/>
               </div>
               <div className="col-md-5">
                 <select className="form-control">
                   <option value="servings" defaultValue>Servings</option>
                   <option value="units">{food.serving_type}</option>
                 </select>
               </div>
               <div className="col-md-3 pull-left">
                 <button type="button" className="btn btn-danger delete">Delete</button>
               </div>
             </div>
           </div>
         </div>
       </li>
     )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ viewFood }, dispatch);
}

// function mapStateToProps(state) {
//   return {
//     date: state.diary.date
//   }
// }

export default connect(null, mapDispatchToProps)(SearchResultItem);
