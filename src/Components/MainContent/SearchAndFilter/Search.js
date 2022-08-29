import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Search = () => {
    const [value, setValue] = useState ('');
    const navigate = useNavigate();
    const handleKeyDown = (event) =>{
        if(event.keyCode===13 ){
            value !== '' ? navigate (`/search/${value}`) : navigate (`/`);
        }        
    }

    return (
        <SearchPane>
            <h3>Search Country:</h3>
                <SearchElement>
                    <input type="text" 
                    placeholder='Input the and enter to search...'
                    onChange={e=>setValue(e.target.value)}
                    value={value}
                    onKeyDown={(event)=>handleKeyDown(event)}/>
                    <Link to={value !== '' ? `/search/${value}` : `/`} >
                        <div style={{ height:"100%",width:"40px"}} >
                            <MdSearch className='icon' />
                        </div>
                    </Link>
                </SearchElement>
        </SearchPane>
    );
};



export default Search;

const SearchPane = styled.div`  
    margin-top:30px;
    max-width:320px;
    width:100%;

    h3{
        font-size:20px;
        font-weight:600;
        text-shadow:var(--TextShadow);
    }
`

const SearchElement = styled.div`
    width:100%;
    height:34px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:var(--BoxShadow);
    margin-top:10px;
    border-radius:6px;
    background:#fff;
    overflow:hidden;

    .icon{
        width:100%;
        height:100%;
        background: #aaa; !important;
        box-shadow:none; !important;
        opacity:75%;
        padding-top:4px;
        transition:opacity 0.4s linear;
        cursor:pointer;
        &:hover{
            opacity:1;
        }
    }

    input{
        border:0;
        outline:0;
        width:100%;
        font-size:18px;
        font-weight:500;
        margin:0 10px;
    }
`