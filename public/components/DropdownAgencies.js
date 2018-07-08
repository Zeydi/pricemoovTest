import React from 'react'
import {connect} from 'react-redux';
import {loadCategories} from '../actions/categoriesActions'

const actions = {
  loadCategories
};


class DropdownAgencies extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.change=this.change.bind(this);
  }
  change (event){
    this.setState({
      value: event.target.value
  })

  }
  render() {
    if (this.state.value) {
    const agency = this.props.agencies.find(agency => agency.name === this.state.value)
    this.props.loadCategories(agency)
    }
    const { agencies} = this.props
    return(
      <div>
        <select className="soflow" onChange={this.change} value={this.state.value}>
            <option value="" disabled>{this.props.default}</option>
            {
              agencies.map(function(agency) {
                return <option key={agency.id}
                  value={agency.name}>{agency.name}</option>;
              })
            }
          </select>
      </div>
    )
  }
}

export default connect(null, actions)(DropdownAgencies);
