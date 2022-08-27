import React from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const Search = () => {
    return (
        <SearchPane>
            <h3>Search Country:</h3>
                <SearchElement>
                    <input type="text" 
                    placeholder='Input the and enter to search...'/>
                    <div style={{ height:"100%",width:"40px"}}>
                        <MdSearch className='icon' />
                    </div>
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
        font-size:20px;
        width:100%;
        height:100%;
        background: #aaa; !important;
        box-shadow:none; !important;
        opacity:75%;
        padding-top:2px;
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