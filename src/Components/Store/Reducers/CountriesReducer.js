 import { GET_COUNTRIES, GET_COUNTRY_BY_NAME } from "../types"

 const CountriesReducerInitialState = {
    countries:[],
    country:null
 }
 const CountriesReducer = (state = CountriesReducerInitialState, action ) => {
    const {type, payload} = action;
    switch(type){
        case GET_COUNTRIES:
            return {...state, countries:payload};

        case GET_COUNTRY_BY_NAME:
            return {...state, country:payload};
            
        default:
            return state;
    }

 }

 export default CountriesReducer ;