import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { getCountries, getCountriesByRegion, getCountriesByName } from '../../Store/Actions/countriesActions';
import { useDispatch, useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import ScrollBar from 'react-perfect-scrollbar';
import Loading from '../../Loading/Loading';
import Pagination from '../../Paginations/Paginations';


const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.Countries.countries);
    const loading = useSelector(state => state.Countries.loading);
    const slug = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [PerPage] = useState(12);

    const indexOfLast = currentPage * PerPage;
    const indexOfFirst = indexOfLast - PerPage;
    const currentProducts = countries.slice(
    indexOfFirst,
    indexOfLast
  );
  
    useEffect(() => {
        if (slug.regionName) {
            dispatch(getCountriesByRegion(slug.regionName));
            setCurrentPage(1);
        }
        else if (slug.Name) {
            dispatch(getCountriesByName(slug.Name));
            setCurrentPage(1);
        }
        else
            dispatch(getCountries());
    }, [dispatch, slug.regionName, slug.Name]);



    return (
        <>
            {
                loading ? <Loading /> :
                    (
                        <ScrollBar style={{ maxHeight: '100vh', overflow: 'hidden' }}>
                            <CountriesContainer>
                                {
                                    currentProducts.map((country, index) => {
                                        return (
                                            <Country country={country} key={index} />
                                        )
                                    })
                                }
                            </CountriesContainer>
                            <Pagination 
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                countriesPerPage={PerPage}
                                totalCountries={countries.length}/>
                        </ScrollBar>
                    )
            }
        </>
    );
};

export default Countries;

const CountriesContainer = styled.div`
{
    width:100%;
    padding:4px 1px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns:repeat(3,1fr);
        gap:10px:
      }

    @media only screen and (max-width:768px) {
        grid-template-columns:repeat(2,1fr);
        gap:8px
      }
    
    @media only screen and (max-width: 600px) {
        grid-template-columns:repeat(1,1fr);
      }
    }
`

