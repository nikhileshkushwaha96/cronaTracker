import React, { Component } from 'react'
import { fetchdata } from './api'


import Card from './component/Card/Card'
 import Chart from './component/Chart/Chart'
import CountryPicker from './component/CountryPicker/CountryPicker'

import styles from './App.module.css'




class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:{},
         country:""
      }
    }

  async componentDidMount(){
   const fetch = await fetchdata()
    //    console.log(fetch)
   this.setState({
    data:fetch
   })

    }

  handleCountryChange= async(country)=>{

    const fetch = await fetchdata(country)
       ///get data
       ///set data
    console.log(fetch)

    this.setState({
      data:fetch
    })



   }


  render() {

    const {data}=this.state

    return (
      <div className={styles.container}>

        <Card  data={data} />
        {/* <Chart/> */}
        <CountryPicker handleCountryChange={this.handleCountryChange} />

      </div>
     
     
    )
  }
}

export default App