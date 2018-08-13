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
      filteredData: listingsData
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
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

  filteredData(){
    // item is equal to each listing. The item(s) (listing(s)) that matches the price, bedroom and sqft conditions is/are returned
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
    // the item(s) that match the home type is returned
    if(this.state.homeType != "All"){
      newData = newData.filter((item) =>{
        return item.homeType == this.state.homeType
      })
    }

    this.setState({
      // the filteredData property is set to the newData variable
      filteredData: newData
    })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state}/>
        <Listings listingsData={this.state.filteredData}/>
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
