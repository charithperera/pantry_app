import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import SearchBar from './search_bar';
import SearchResults from './search_results';
import FoodDetail from './food_detail';
import MyFoods from './my_foods';
import DatePicker from 'react-datepicker';
var moment = require('moment');
import { connect } from 'react-redux';
import { changeDate } from '../actions/index';

import './diary.css';
import 'react-datepicker/dist/react-datepicker.css'

class Diary extends Component {
  handleChange(date) {
    this.props.changeDate(date);
  }

  render() {
    return (
      <div className="content">
        <div className = "row">
          {/* <MyStats myStats={this.state.myStats}/> */}
        </div>
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-5">
            <DatePicker className="date"
              dateFormat="DD/MM/YYYY"
              selected={this.props.date}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Find Food</h3>
            <SearchResults />
          </div>
          <div className="col-md-4">
            <h3>Nutrition</h3>
            <FoodDetail />
          </div>
          <div className="col-md-4">
            <h3>My Food</h3>
            <MyFoods />
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeDate }, dispatch);
}

function mapStateToProps(state) {
  return {
    date: state.diary.date || moment()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diary);
