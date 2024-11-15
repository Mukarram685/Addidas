import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' style={{ padding: "3rem" }}>
          <div className='col-md-6'>
            <h1>MEN'S ATHLETIC SHOES & SNEAKERS: BUY 2 ITEMS, GET 30% OFF WITH CODE* REFRESH</h1>
            <p className='lead'>
              From Ultraboost to Superstar, you can find the perfect men’s athletic shoes to fit your lifestyle. Sneakers made with your comfort in mind so you can put all of your focus into your next session. Hit refresh on your style for spring.
            </p>
          </div>
          <div className='col-md-6 d-flex justify-content-md-end'>
            <img src="shoes.webp" style={{ height: "25rem" }} alt="shoes" />
          </div>
        </div>
      </div>
    );
  }
}
