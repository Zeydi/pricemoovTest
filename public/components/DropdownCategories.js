import React from 'react'
import {connect} from 'react-redux';
import {loadPrices} from '../actions/pricesActions'

const actions = {
  loadPrices
};

class DropdownCategories extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.change=this.change.bind(this);
  }
  change (event){
    this.setState({
      value: event.target.value
  });

  const cat = this.props.categories.find(category => category.name === event.target.value)
  // Loading Prices
  this.props.loadPrices(this.props.agency, cat)
  }
  render() {
    const { categories } = this.props
    return(
      <div>
        <select  className="soflow" required onChange={this.change} value={this.state.value} >
            <option value="" disabled>{this.props.default}</option>
            {
              categories.map(function(agency) {
                return <option key={agency.id}
                  value={agency.name}>{agency.name}</option>;
              })
            }
          </select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    agency: state.agencies.agency,
    category: state.categories.category
  };
}
export default connect(mapStateToProps, actions)(DropdownCategories);
