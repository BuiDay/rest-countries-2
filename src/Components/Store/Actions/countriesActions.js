import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME } from "../types";

const countriesApi = 'https://restcountries.com/v2/'

export const getCountries = () => async (dispatch) =>{
    await axios.get(countriesApi + '/all')
    .then(res=>{
        const countries = res.data.map((country)=>({
            name: country.name,
            capital: country.capital,
            population: new Intl.NumberFormat().format(country.population),
            region: country.region,
            flag: country.flag
        }))
        dispatch({type: GET_COUNTRIES, payload:countries})
    })
    .catch((err)=>console.log('Get countries api error',err))
}

export const getCountryByName = (name) => async(dispatch) =>{
    await axios.get(`${countriesApi}/name/${name}`)
    .then(res=>{
        dispatch({type: GET_COUNTRY_BY_NAME, payload:res.data[0]})
    })
    .catch((err)=>console.log('Get countries api error',err))
}

export const getCountriesByRegion = () => async (dispatch) =>{
    await axios.get(countriesApi + '/all')
    .then(res=>{
        const countries = res.data.map((country)=>({
            name: country.name,
            capital: country.capital,
            population: new Intl.NumberFormat().format(country.population),
            region: country.region,
            flag: country.flag
        }))
        dispatch({type: GET_COUNTRIES, payload:countries})
    })
    .catch((err)=>console.log('Get countries api error',err))
}