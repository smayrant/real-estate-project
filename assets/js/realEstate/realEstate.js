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

    }
    this.change = this.change.bind(this)
  }
  change(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }
  render () {
    console.log(this.state.listingsData)
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change}/>
        <Listings listingsData={this.state.listingsData}/>
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
