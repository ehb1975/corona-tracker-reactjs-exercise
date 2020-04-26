import axios from 'axios'
import * as _ from "lodash";

const url = 'https://covid19.mathdro.id/api'
const urlTotal = 'https://api.covid19api.com/total/country'
const urlCountry = 'https://api.covid19api.com/countries'
const urlByCountry = 'https://api.covid19api.com/country'


export const fetchData = async (country) => {

    let changeableUrl = url;
    let temp = {}
    if(country && country !== 'global'){
        changeableUrl = `${urlTotal}/${country}`
    }
    try {
        if(!country || country === 'global'){
            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
            return { confirmed, recovered, deaths, lastUpdate }
        }else{
            const { data } =  await axios.get(changeableUrl);
            if(data.length > 0){
                temp = data[data.length - 1];
            }
            console.log(temp);
            const modifiedData = {
                confirmed: temp.Confirmed,
                deaths: temp.Deaths,
                recovered: temp.Recovered,
                lastUpdate: temp.Date,
            }
            return modifiedData;
        }
    } catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async (country) => {
    let changeableUrl = `${url}/daily`;
    if(country && country !== 'global'){
        changeableUrl = `${urlByCountry}/${country}`
        try {
            const { data } = await axios.get(changeableUrl);
 
            const modifiedData = data.map((dailyData) => ({
                confirmed: dailyData.Confirmed,
                deaths: dailyData.Deaths,
                date: dailyData.Date,
            }));
            return modifiedData;
        }catch(error){

        }
    }else{
        try {
            const { data } = await axios.get(changeableUrl);
            const modifiedData = data.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }));
            return modifiedData;
        }catch(error){

        }
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${urlCountry}`);
        const modifiedData = data.map((pais) => ({
            country: pais.Country,
            slug: pais.Slug,
        }));
        const sorted = _.sortBy(modifiedData, 'country');
        return sorted;
    } catch(error){

    }
}