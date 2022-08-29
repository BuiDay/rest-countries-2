import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import CountryInfo from './CountryInfo';
import { getCountryByName } from '../../Store/Actions/countriesActions';
import { useSelector } from 'react-redux';
import ScrollBar from 'react-perfect-scrollbar';
import Loading from '../../Loading/Loading';

const CountryDetail = () => {
    const themeContext = useContext(ThemeContext);
    const slug = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const country = useSelector(state => state.Countries.country);
    const loading = useSelector(state => state.Countries.loading);

    useEffect(() => {
        dispatch(getCountryByName(slug.countryName));
    }, [slug.countryName, dispatch]);

    return (
        <>
            {
                loading ? <Loading /> : (
                    <ScrollBar style={{ maxHeight: '100vh', overflow: 'hidden' }}>
                        <Wrapper>
                            <div className={`goback-btn ${themeContext.theme}`} onClick={() => navigate(-1)}>Go Back</div>
                            <CountryContainer>
                                <div className='flagCountry'>
                                    <img src={country ? country.flag : 'https://via.placeholder.com/75'} alt="" />
                                </div>
                                <CountryInfo />
                            </CountryContainer>
                        </Wrapper>
                    </ScrollBar>
                )
            }
        </>
    );
};

export default CountryDetail;

const Wrapper = styled.div`
    padding-top:20px;
    padding-left:20px;
    .goback-btn{
        display:block;
        width:80px;
        height:28px;
        padding: 4px 4px;
        border-radius:5px;
        text-align:center;
        font-weight:400;
        filter:brightness(0.9);
        transition:all 0.2s linear;
        &:hover{
            filter:brightness(1);
            font-weight:500;
            cursor:default;
            user-select:none;
        }
    
    }
`

const CountryContainer = styled.div`
    display:flex;
    flex-direction:row;
    @media only screen and(max-width:800px){
        flex-direction:column;
        align-items:center;
    }
    .flagCountry{
        max-width:400px;
        width:100%;
        height:100%;
        margin-top:30px;
        // box-shadow:var(--BoxShadow);
        img{
            width:100%;
            height:100%;
            object-fit:cover;
            box-shadow:var(--BoxShadow);
            }
        }   
`

