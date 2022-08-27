import React, { useContext, useEffect, useRef, useState } from 'react';
import {FaChevronDown} from 'react-icons/fa'
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContext/ThemeContext.js';
import Options from './Options.js';
import {useParams} from 'react-router-dom'

const Filter = () => {
    const themeContext = useContext(ThemeContext);
    const refSelect = useRef(null);
    const [isShowOptions, setIsShowOptions] = useState(false); 
    const {regionName} = useParams();
    const [optionName, setOptionName] = useState('All');

    const handleOptions = (e) =>{
        if(refSelect.current)
            setIsShowOptions(refSelect.current.contains(e.target));
    }

    useEffect(()=>{
        if(isShowOptions)
            document.addEventListener('click',handleOptions);
        return ()=> {
            document.removeEventListener('click',handleOptions);
        }
    },[isShowOptions])

    useEffect(()=>{
        if(regionName)
            setOptionName(regionName);
        else
            setOptionName('All');
    },[regionName])

    return (
        <FilterPane>
            <h3>Filter my regions</h3>
            <SelectPane>
                <Select className={themeContext.theme} ref={refSelect} onClick={(e)=>handleOptions(e)}>
                    <span>{optionName}</span>
                    <FaChevronDown/>
                </Select>
                <Options isShowOptions={isShowOptions} />
            </SelectPane>
        </FilterPane>
    );
};

export default Filter;

const FilterPane = styled.div`
    max-width:180px;
    width:100%;
    margin-top:25px;
    
    h3{
        font-size:20px;
        font-weight:600;
        text-shadow:var(--TextShadow);
    }
`

const SelectPane = styled.div`
    width:100%;
    margin-top:10px;
    position:relative;
`

const Select = styled.div`
    padding:0 8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:34px;
    border-radius:6px;
    user-select:none;
    font-size:18px;
    span{
        font-weight:500;
    }
`
