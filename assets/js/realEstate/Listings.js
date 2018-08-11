import React, {Component} from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search"/>
      </section>
      <section className="sort-by-area">
        <div className="results">390 Results Found</div>
        <div className="sort-options">
          <select name="sort-by" className="sort-by">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-list-ul"></i>
            <i className="fas fa-th"></i>
          </div>
        </div>
      </section>
      <section className="listings-results">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Address</span>
            <div className="details">
              <div className="user-img"><img src="https://randomuser.me/api/portraits/women/65.jpg" /></div>
              <div className="user-details">
                <span className="user-name">Nina Simone</span>
                <span className="listing-date">Posted on 8/22/2018</span>
              </div>
              <div className="listing-details">
                <div className="Square Footage">
                  <i className="fas fa-home"></i>
                  <span>1,456 sqft</span>
                </div>
                <div className="bedrooms">
                  <i className="fas fa-bed"></i>
                  <span>4 Bedrooms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span>$1,250 Monthly</span>
            <span><i className="fas fa-location-arrow"></i> Los Angeles, CA</span>
          </div>
        </div>
      </section>
      <section className="pagination">
        <ul className="pagination-nums">
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
    </section>)
  }
}
