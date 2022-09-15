import React from 'react'
import { fetchdailydata}  from '../../api'

import { useEffect,useState } from 'react'

import {Line,Bar} from 'react-chartjs-2'
// import styles from './Chart.module.css'
//  import { rgbToHex } from '@mui/material'




const Chart = () => {

  
const [dailydata,setdailydata] = useState([])

useEffect(()=>{

 const fetchapi=async()=>{ 
setdailydata( await (fetchdailydata()))
 
   
 
}

fetchapi()


  
},[])




console.log(dailydata)


  return (
    <div>{

      dailydata.length ?(
        <Line data={{
          lables:dailydata.map(({date})=>date),
          datasets:[
            {
            data:dailydata.map(({confirmed})=>confirmed),
            lables:'Infected',
            backgroundColor:'#3333ff',
            fill:true
      
            },
          {
            data:dailydata.map(({deaths})=>deaths),
            lables:'death',
            backgroundColor:'#3333ff',
            fill:true
          }]
        }} />):null
      
      }</div>
  )
}

export default Chart