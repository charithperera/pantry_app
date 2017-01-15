import React, { Component } from 'react';
import { connect } from 'react-redux';
import './food_detail.css';

class FoodDetail extends Component {
  render() {
    if (!this.props.viewFood) {
      return null
    }

     return (
       <div>
         <section className="performance-facts">
           <div className="text-center">
             <h2>{this.props.viewFood.name}</h2>
             <h3>{this.props.viewFood.brand}</h3>
           </div>
           <header className="performance-facts__header">
             <h1 className="performance-facts__title">Nutrition Facts</h1>
             <p>Serving Size {this.props.viewFood.serving_size} {this.props.viewFood.serving_type}</p>
             <p>Serving Per Container {this.props.viewFood.servings_per_container || "N/A"}</p>
           </header>
           <table className="performance-facts__table">
             <thead>
               <tr>
                 <th colSpan="3" className="small-info">
                   Amount Per Serving
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <th colSpan="2">
                   <b>Calories</b> {this.props.viewFood.calories}
                 </th>
                 <td>
                   Calories from Fat N/A
                 </td>
               </tr>
               <tr className="thick-row">
                 <td colSpan="3" className="small-info">
                   <b>% Daily Value*</b>
                 </td>
               </tr>
               <tr>
                 <th colSpan="2">
                   <b>Total Fat</b>
                 </th>
                 <td>
                   <b>{this.props.viewFood.fat}g</b>
                 </td>
               </tr>
               <tr>
                 <td className="blank-cell">
                 </td>
                 <th>
                   Saturated Fat
                 </th>
                 <td>
                   <b>N/A</b>
                 </td>
               </tr>
               <tr>
                 <td className="blank-cell">
                 </td>
                 <th>
                   Trans Fat
                 </th>
                 <td>
                   N/A
                 </td>
               </tr>
               <tr>
                 <th colSpan="2">
                   <b>Cholesterol</b>
                 </th>
                 <td>
                   <b>N/A</b>
                 </td>
               </tr>
               <tr>
                 <th colSpan="2">
                   <b>Sodium</b>
                 </th>
                 <td>
                   <b>N/A</b>
                 </td>
               </tr>
               <tr>
                 <th colSpan="2">
                   <b>Total Carbohydrate</b>
                 </th>
                 <td>
                   <b>{this.props.viewFood.carbs}g</b>
                 </td>
               </tr>
               <tr>
                 <td className="blank-cell">
                 </td>
                 <th>
                   Dietary Fiber
                 </th>
                 <td>
                   <b>N/A</b>
                 </td>
               </tr>
               <tr>
                 <td className="blank-cell">
                 </td>
                 <th>
                   Sugars
                 </th>
                 <td>
                   N/A
                 </td>
               </tr>
               <tr className="thick-end">
                 <th colSpan="2">
                   <b>Protein</b>
                 </th>
                 <td>
                   <b>{this.props.viewFood.protein}g</b>
                 </td>
               </tr>
             </tbody>
           </table>

           {/* <table className="performance-facts__table--grid">
             <tbody>
               <tr>
                 <td colSpan="2">
                   Vitamin A
                   10%
                 </td>
                 <td>
                   Vitamin C
                   0%
                 </td>
               </tr>
               <tr className="thin-end">
                 <td colSpan="2">
                   Calcium
                   10%
                 </td>
                 <td>
                   Iron
                   6%
                 </td>
               </tr>
             </tbody>
           </table> */}

           <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>

           {/* <table className="performance-facts__table--small small-info">
             <thead>
               <tr>
                 <td colSpan="2"></td>
                 <th>Calories:</th>
                 <th>2,000</th>
                 <th>2,500</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <th colSpan="2">Total Fat</th>
                 <td>Less than</td>
                 <td>65g</td>
                 <td>80g</td>
               </tr>
               <tr>
                 <td className="blank-cell"></td>
                 <th>Saturated Fat</th>
                 <td>Less than</td>
                 <td>20g</td>
                 <td>25g</td>
               </tr>
               <tr>
                 <th colSpan="2">Cholesterol</th>
                 <td>Less than</td>
                 <td>300mg</td>
                 <td>300 mg</td>
               </tr>
               <tr>
                 <th colSpan="2">Sodium</th>
                 <td>Less than</td>
                 <td>2,400mg</td>
                 <td>2,400mg</td>
               </tr>
               <tr>
                 <th colSpan="3">Total Carbohydrate</th>
                 <td>300g</td>
                 <td>375g</td>
               </tr>
               <tr>
                 <td className="blank-cell"></td>
                 <th colSpan="2">Dietary Fiber</th>
                 <td>25g</td>
                 <td>30g</td>
               </tr>
             </tbody>
           </table> */}

           <p className="small-info">
             Calories per gram:
           </p>
           <p className="small-info text-center">
             Fat 9
             &bull;
             Carbohydrate 4
             &bull;
             Protein 4
           </p>
         </section>
       </div>
     )
  }
};

function mapStateToProps(state) {
  return {
    viewFood: state.diary.viewFood
  }
}

export default connect(mapStateToProps)(FoodDetail);
