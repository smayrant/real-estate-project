import React, {Component} from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {}
    this.loopListings = this.loopListings.bind(this)
  }
  loopListings() {

    let {listingsData} = this.props

    // Error message if the filtered data returns no listings
    if (listingsData == undefined || listingsData.length == 0) {
      return "Sorry, your filter(s) did not match any listings."
    }

    return listingsData.map((listing, index) => {
      // if the view state is changed to 'box', return the listings in the box view style
      if (this.props.globalState.view == 'box') {
        return (<div className="col-md-3" key={index}>
          <div className="listing">
            <div className="listing-img" style={{
                background: `url("${listing.image}") no-repeat center center`
              }}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="user-details-container">
                  <div className="user-img"><img src="https://randomuser.me/api/portraits/women/65.jpg"/></div>
                  <div className="user-details">
                    <span className="user-name">Nina Simone</span>
                    <span className="listing-date">Posted on 8/22/2018</span>
                  </div>
                </div>
                <div className="listing-details">
                  <div className="squareFootage">
                    <i className="fas fa-home"></i>
                    <span>{listing.sqft}
                      sqft</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fas fa-bed"></i>
                    <span>{listing.bedrooms}
                      Bedrooms</span>
                  </div>
                </div>
                <div className="viewListing">
                  View Listing
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="monthlyPrice">${listing.price}</span>
              <span className="location">
                <i className="fas fa-location-arrow"></i>
                {listing.city}, {listing.state}</span>
            </div>
          </div>
        </div>)
      } else {
        // Return the listings in a list style view otherwise
        return (<div className="col-md-12 col-lg-6" key={index}>
            <div className="listing">
              <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="user-details-container">
                    <div className="user-img"><img src="https://randomuser.me/api/portraits/women/65.jpg" /></div>
                    <div className="user-details">
                      <span className="user-name">Nina Simone</span>
                      <span className="listing-date">Posted on 8/22/2018</span>
                    </div>
                  </div>
                  <div className="listing-details">
                    <div className="squareFootage">
                      <i className="fas fa-home"></i>
                      <span>{listing.sqft} sqft</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed"></i>
                      <span>{listing.bedrooms} Bedrooms</span>
                    </div>
                  </div>
                  <div className="viewListing">
                    View Listing
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="monthlyPrice">${listing.price}</span>
                <span className="location"><i className="fas fa-location-arrow"></i> {listing.city}, {listing.state}</span>
              </div>
            </div>
          </div>
        )
      }

    })

  }
  render() {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" onChange={this.props.change}/>
      </section>
      <section className="sortby-area">
        <div className="results">390 Results Found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={this.props.change}>
            <option value="price-asc">Lowest Price</option>
            <option value="price-dsc">Highest Price</option>
            <option value="sqft-asc">Lowest Sqft.</option>
            <option value="sqft-dsc">Highest Sqft.</option>
            <option value="bed-asc">Bedrooms (Low to High)</option>
            <option value="bed-dsc">Bedrooms (High to Low)</option>
          </select>
          <div className="view">
            {/* using the bind method ensures the functions won't be invoked until either view button is clicked while also being able to pass in arguments*/}
            <i className="fas fa-list-ul" onClick={this.props.changeView.bind(null, "list")}></i>
            <i className="fas fa-th" onClick={this.props.changeView.bind(null, "box")}></i>
          </div>
        </div>
      </section>
      <section className="listings-results">
        {this.loopListings()}
      </section>
      <section className="pagination">
        <ul className="pages">
          <li className="pageButtons">Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li className="pageButtons">Next</li>
        </ul>
      </section>
    </section>)
  }
}
