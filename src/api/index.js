import axios from "axios";

const url ='https://covid19.mathdro.id/api/';

export const fetchdata = async(country)=>{
let changeUrl = url;

if(country)
{
    changeUrl = `${url}countries/${country}`
}


try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeUrl)
    return {confirmed, recovered, deaths,lastUpdate}    
} catch (error) {
    
    console.log('error')
    
}
}


export const fetchdailydata = async()=>{
    try{
        const {data} = await axios.get(`${url}daily`)
        // console.log(data)

       let modifiedData = data.map((dailydata)=>({
        confirmed:dailydata.confirmed.total,
        deaths:dailydata.deaths.total,
        date:dailydata.reportDate

       }))

       return modifiedData

      // return {confirmed, recovered, deaths,lastUpdate} 

    }catch(error){
 
        console.log('got an error')
    }
}


export const fetchCountryData = async()=>{
    try{
       const {data:{countries}} = await axios.get(`${url}countries`)
       
     return  countries.map((country)=>country.name)
        // return res

    }
    catch(error){
        console.log(error)

    }
}