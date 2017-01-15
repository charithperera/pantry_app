import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyFoodItem from './my_food_item';
import './my_food_item.css';

class MyFoods extends Component {
  renderEntries() {
    debugger;
    if (this.props.entries) {
      return this.props.entries.map((entry) => {
        return (
          <MyFoodItem entry={entry} key={entry.id}/>
        )
      })
    }
  }

  render() {
     return (
       <div className="food-list">
         <ul className="list-group">
           {this.renderEntries()}
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
    entries: state.diary.entries
  }
}

export default connect(mapStateToProps)(MyFoods);
