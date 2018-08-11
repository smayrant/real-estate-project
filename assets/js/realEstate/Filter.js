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
        <select name="neighborhood" className="filters neighborhood">
          <option>Circle Dr</option>
        </select>
        <select name="housetype" className="filters houseType">
          <option>Colonial</option>
        </select>
        <select name="bedrooms" className="filters bedrooms">
          <option>2 Bedrooms</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input placeholder="Min Price" type="text" name="min-price" className="min-price"/>
          <input placeholder="Max Price" type="text" name="max-price" className="max-price"/>
        </div>
        <div className="filters floor-space">
          <span className="title">Square Footage</span>
          <input placeholder="Min Sq. Ft." type="text" name="min-square-footage" className="min-square-footage"/>
          <input placeholder="Max Sq. Ft." type="text" name="max-square-footage" className="max-square-footage"/>
        </div>
        <div className="filters extras">
          <span className="title">More Filters</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input type="checkbox" value="elevator" name="extras"></input>
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input type="checkbox" value="swimming pool" name="extras"></input>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input type="checkbox" value="finished basement" name="extras"></input>
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input type="checkbox" value="gym" name="extras"></input>
          </label>
        </div>
      </div>
    </section>)
  }
}
