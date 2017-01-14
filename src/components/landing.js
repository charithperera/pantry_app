import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <div className="container">
            <div className="row">
              <h1>Pantry</h1>
            </div>
          </div>
        </section>
        <section className="action">
          <div className="container">
            <div className="row">
              <p>Pantry is your kitchen & food tracking companion. Use it to track your caloric and macro-nutrient intake to reach your fitness goals.</p>
              <ul className="list-inline">
                <li><a href="/signup" className="btn btn-trans btn-md sign-up">Sign Up</a></li>
                <li><a href="/login" className="btn btn-primary btn-md">Log In</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Landing;
