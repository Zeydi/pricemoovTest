import React from 'react';

class Price extends React.Component{

  render() {
    return(
      <div>
        <p  id="price">Prix: {this.props.price}, Prix suggéré: {this.props.suggestedPrice} </p>
      </div>
    )
  }
}

module.exports = Price;
