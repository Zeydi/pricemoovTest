import React from 'react';
import axios from 'axios'
import DropdownAgencies from 'DropdownAgencies'
import DropdownCategories from 'DropdownCategories'
import Prices from 'Prices'
import {connect} from 'react-redux';
import {loadAgencies} from '../actions/agenciesActions'


const actions = {
  loadAgencies
};

class Main extends React.Component{
  constructor(props) {
      super(props);

  }
  componentWillMount() {
    //Loading Agneices
    this.props.loadAgencies()
  }


  render() {
    const  {agencies} = this.props
    return(
      <div>
        <DropdownAgencies agencies={this.props.agencies} default="agencies" />
        <DropdownCategories categories={this.props.categories} default="categories" />
        <Prices />
      </div>)
  }
}
function mapStateToProps(state) {
  return {
    agencies: state.agencies.agencies,
    categories: state.categories.categories,
  };
}
export default connect(mapStateToProps, actions)(Main);
