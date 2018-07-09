import React from 'react';
import {connect} from 'react-redux';
import Switch from "react-switch";
import {loadPrices} from '../actions/pricesActions'
import Price from 'Price'

const pricesStyle = {
  borderStyle: 'groove',
  width: '300',
  height: '200',
  position:'relative',
  margin:'30',
}

class Prices extends React.Component{
  constructor(props) {
    super(props);
    this.state = { checked: false };
   this.handleChange = this.handleChange.bind(this);

  }
  handleChange(checked) {
    this.setState({ checked });
  }

  renderPrices() {
    if (this.props.prices.length > 0) {
     return this.props.prices.map(
       price =>
         <Price
           {...price}
           key={price.id}

         />);
       }
    }

  render(){
    let postContent ;
    if (this.props.prices.prices.length > 0) {
      // Sorting Prices with startdate
      const sortedPrices = this.props.prices.prices.sort(function(obj1, obj2) {
        return obj1.startDate - obj2.startDate;
      });
      if (!this.state.checked) {
        const newPrices = sortedPrices.filter(price => price.isValidated === true )
        postContent = newPrices.map(
           price =>
             <Price
               price={price.price}
               suggestedPrice={price.suggestedPrice}
               key={price.id}
            />)
      } else postContent = sortedPrices.map(
         price =>
           <Price
             price={price.price}
             suggestedPrice={price.suggestedPrice}
             key={price.id}
          />)
    }
    return(
      <div style={pricesStyle}>
        Prices:
        {postContent}
        <label htmlFor="normal-switch" style={{ position: 'absolute', bottom: '0',
    right: '0'}}>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </label>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    prices: state.prices
  };
}
export default connect(mapStateToProps, null)(Prices);
