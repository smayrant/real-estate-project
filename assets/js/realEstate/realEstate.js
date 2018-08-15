import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: 1,
      min_price: 0,
      max_price: 10000000,
      min_square_footage: 0,
      max_square_footage: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-asc',
      view: 'box',
      search: ''
    }

    // explicity defining the this keyword for each method
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  // runs this method before the component is rendered to show the listings from lowest price to highest price
  componentWillMount(){
    let listingsData = this.state.listingsData.sort((firstListing, secondListing) =>{
      return firstListing.price - secondListing.price
    })
    this.setState({
      listingsData
    })
  }

  change(event){
    let name = event.target.name
    // value equals the checkbox if it's checked or the value of the event on anything other than a checkbox
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  changeView(viewName){
    this.setState({
      view: viewName
    })
  }

  filteredData(){
    // item is equal to each listing. The item(s) (or listing(s)) that matches the price, bedroom and sqft conditions is/are returned
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.sqft >= this.state.min_square_footage && item.sqft <= this.state.max_square_footage
      && item.bedrooms >= this.state.bedrooms
    })
    // the item(s) that match each city is returned
    if(this.state.city != "All"){
      newData = newData.filter((item) =>{
        return item.city == this.state.city
      })
    }
    // the item(s) that match the selected home type is returned
    if(this.state.homeType != "All"){
      newData = newData.filter((item) =>{
        return item.homeType == this.state.homeType
      })
    }

    // ----------------------- THE SORTING SECTION -------------------------
    // sort and return listings by lowest price when the user selects 'Lowest Price'
    if(this.state.sortby == 'price-asc'){
      newData = newData.sort((firstListing, secondListing) =>{
          return firstListing.price - secondListing.price
      })
    }

    // sort and return listings by higheset price when the user selects 'Highest Price'
    if(this.state.sortby == 'price-dsc'){
      newData = newData.sort((firstListing, secondListing) =>{
          return secondListing.price - firstListing.price
      })
    }

    // sort and return listings by higheset square footage when the user selects 'Highest Sqft.'
    if(this.state.sortby == 'sqft-dsc'){
      newData = newData.sort((firstListing, secondListing) =>{
          return secondListing.sqft - firstListing.sqft
      })
    }

    // sort and return listings by lowest square footage when the user selects 'Lowest Sqft.'
    if(this.state.sortby == 'sqft-asc'){
      newData = newData.sort((firstListing, secondListing) =>{
          return firstListing.sqft - secondListing.sqft
      })
    }

    // sort and return listings by higheset square footage when the user selects 'Highest Sqft.'
    if(this.state.sortby == 'bed-dsc'){
      newData = newData.sort((firstListing, secondListing) =>{
          return secondListing.bedrooms - firstListing.bedrooms
      })
    }

    // sort and return listings by higheset square footage when the user selects 'Highest Sqft.'
    if(this.state.sortby == 'bed-asc'){
      newData = newData.sort((firstListing, secondListing) =>{
          return firstListing.bedrooms - secondListing.bedrooms
      })
    }

    this.setState({
      // the filteredData property is set to the newData variable
      filteredData: newData
    })
  }

  //
  populateForms(){
    // City
    let cities = this.state.listingsData.map((item) =>{
      return item.city
    })
      cities = new Set(cities)
      // The set is placed into an array
      cities = [...cities]

      // sorts the returned cities from A to Z
      cities = cities.sort()

    // home Type
    let homeTypes = this.state.listingsData.map((item) =>{
      return item.homeType
    })
      homeTypes = new Set(homeTypes)
      homeTypes = [...homeTypes]

      // sorts the returned home types from A to Z
      homeTypes = homeTypes.sort()

    // bedrooms
    let bedrooms = this.state.listingsData.map((item) =>{
      return item.bedrooms
    })
      bedrooms = new Set(bedrooms)
      bedrooms = [...bedrooms]

      // sorts the number of bedrooms numerically
      bedrooms = bedrooms.sort()

      this.setState({
        populateFormsData: {
          homeTypes,
          bedrooms,
          cities
        }
      }, () => {
        console.log(this.state)
      })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
        <Listings listingsData={this.state.filteredData} globalState={this.state} change={this.change} changeView ={this.changeView}/>
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
