import React, { Component } from 'react';
import SearchBar from './search_bar';
import SearchResults from './search_results';
import FoodDetail from './food_detail';

class Diary extends Component {
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
          <div className="col-md-4">
            <h3>Find Food</h3>
            <SearchResults />
          </div>
          <div className="col-md-4">
            <h3>Nutrition</h3>
            {/* <FoodDetail food={this.state.selectedFood}/> */}
            <FoodDetail />
          </div>
          <div className="col-md-4">
            <h3>My Food</h3>
            {/*
            <FoodList
              foods={this.state.myFoods}
              onFoodSelect={this.removeFood}
            />
            */}
            {/* <MyFoodList
              foods={this.state.myFoods}
              onQuantityChange={this.updateStats}
              onDelete={this.removeFood}
            /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Diary;
