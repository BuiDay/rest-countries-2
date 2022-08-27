import React,{useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContext/ThemeContext.js';
import {FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope} from 'react-icons/fa'
import {GiEarthAsiaOceania, GiWorld} from 'react-icons/gi'
import Option from './Option.js';

const Options = ({isShowOptions}) => {
    const themeContext = useContext(ThemeContext);
    const refOptions = useRef(false);

    useEffect(()=>{
        const ShowOption = ()=>{
            if(isShowOptions){
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
                refOptions.current.style.transform = `scaleY(1)`;
            }
            else{
                refOptions.current.style.maxHeight = `0px`;
                refOptions.current.style.transform = `scaleY(0)`;
            }
        }
        ShowOption();
        document.addEventListener('resize',ShowOption);
        return ()=> document.removeEventListener('resize',ShowOption);

    },[isShowOptions])

    return (
        <OptionsPane className={themeContext.theme} ref={refOptions}>
            <Option Icon={GiWorld} Title={'All'}/>
            <Option Icon={FaGlobeAfrica} Title={'Africa'}/>
            <Option Icon={FaGlobeAmericas} Title={'Americas'}/>
            <Option Icon={FaGlobeAsia } Title={'Asia'}/>
            <Option Icon={FaGlobeEurope} Title={'Europe'}/>       
            <Option Icon={GiEarthAsiaOceania} Title={'Oceania'}/>  
        </OptionsPane>
    );
};

export default Options;

const OptionsPane = styled.ul`
    margin-top:5px;
    position:absolute;
    width:100%;
    border-radius:4px;
    overflow:hidden;
    z-index:10;
    transform-origin:top;
    transition:transform 0.2s ease;
`

