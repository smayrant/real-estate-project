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
      min_price: 0,
      max_price: 10000000,
      min_square_footage: 0,
      max_square_footage: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingData
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
    })
  }

  filteredData(){

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
