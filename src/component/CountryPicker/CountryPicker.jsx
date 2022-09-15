import React from 'react'
import { useState,useEffect } from 'react'
import { FormControl,NativeSelect } from '@mui/material'

import { fetchCountryData } from '../../api'

import styles from './CountryPicker.module.css'

 let  CountryPicker=({handleCountryChange})=> {

  const [fetchCountries , setfetchCountries] = useState([])

  useEffect(()=>{
    const fetchCountry = async()=>{
     setfetchCountries(await fetchCountryData()) 
      

    }

    fetchCountry() 
  },[setfetchCountries])

  // console.log(fetchCountries)


  return (
    <FormControl>
      <NativeSelect defaultValue=''  onChange={(e)=>handleCountryChange(e.target.value)}>
        < option value='Global'>Global</option>
        {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}


export default CountryPicker