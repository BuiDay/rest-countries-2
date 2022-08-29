import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import style from './CountryInfoStyle.module.scss'
import { ThemeContext } from '../../ThemeContext/ThemeContext';


const CountryInfo = () => {
    const country = useSelector(state => state.Countries.country);
    const themeContext = useContext(ThemeContext);
    const [countriesBorder, setCountriesBorder] = useState([]);

    const checkOfficial = (e) => {
        let result = '';
        if(e && country){
            e.forEach((x) => {
                if (result !== '')
                    result = result + ',' + ' ' + x;
                else
                    result += x;
            })
        }
        return result;
    }
    const checkLanguage = (country) => {
        let result = '';
        country.country.languages.forEach((language) => {
            if (result !== '')
                result = result + ' ' + '-' + ' ' + language.name;
            else
                result += language.name;
        })
        return result;
    }

    const getCountryByCode = async (code) => {
        const result = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`)
        return result.data;
    }

    useEffect(() => {
        if (country && country.borders ) {
            getCountryByCode(country.borders)
                .then(res => {
                    const getName = res.map(country => country.name);
                    setCountriesBorder(getName);
                })
                .catch((err) => console.log(err))
        }
        else
          setCountriesBorder([]);

    }, [country])

   
    return (
        
        <div className={style.countryInfo}>
            {
                country && (
                    <>
                        <h3 className={style.countryName}>{country.name}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={style.countryInfo__title}>Native Name</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{country.nativeName}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Official</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{checkOfficial(country.altSpellings)}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Population</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{new Intl.NumberFormat().format(country.population)}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Region</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{country.region}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Sub Region</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{country.subregion}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Capital</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{country.capital}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Top Level Domain</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{country.topLevelDomain}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Currencies</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{country.currencies ? `${country.currencies[0].code} - ${country.currencies[0].name}` : ''}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Languages</td>
                                    <td>:</td>
                                    <td className={style.countryInfo__value}>{checkLanguage({ country })}</td>
                                </tr>

                                <tr>
                                    <td className={style.countryInfo__title}>Border Countries</td>
                                    <td>:</td>
                                    <td className={style.borderList}>
                                        {   
                                            countriesBorder.length > 0 && countriesBorder.map(coutryName=>{
                                                return(
                                                    <Link to={`/country/${coutryName}`} key={coutryName}>
                                                    <div className={clsx(style.borderItem, themeContext.theme)} key={coutryName}>{coutryName}</div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            }
        </div>
   
    );
};

export default CountryInfo;