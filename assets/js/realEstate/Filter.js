import React, {Component} from 'react'

export default class Filter extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (<section id="filter">
      <div className="filterContainer">
        <h4>Filter</h4>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          <option value="Houston">Houston</option>
          <option value="Miami">Miami</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Seattle">Seattle</option>
          <option value="Boston">Boston</option>
        </select>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All Home Types</option>
          <option value="Colonial">Single Family</option>
          <option value="Single Family">Apartment</option>
          <option value="Ranch">Townhouse</option>
        </select>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>

          <option value="1">1+ Bedrooms</option>
          <option value="2">2+ Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
          <option value="5">5+ Bedrooms</option>
          <option value="6">6+ Bedrooms</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input placeholder="Min Price" type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input placeholder="Max Price" type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
        </div>
        <div className="filters floor-space">
          <span className="title">Square Footage</span>
          <input placeholder="Min Sq. Ft." type="text" name="min_square_footage" className="min-square-footage" onChange={this.props.change} value={this.props.globalState.min_square_footage}/>
          <input placeholder="Max Sq. Ft." type="text" name="max_square_footage" className="max-square-footage" onChange={this.props.change} value={this.props.globalState.max_square_footage}/>
        </div>
        <div className="filters extras">
          <span className="title">More Filters</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change}></input>
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input type="checkbox" value="swimming_pool" name="swimming_pool" onChange={this.props.change}></input>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input type="checkbox" value="finished_basement" name="finished_basement" onChange={this.props.change}></input>
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input type="checkbox" value="gym" name="gym" onChange={this.props.change}></input>
          </label>
        </div>
      </div>
    </section>)
  }
}
