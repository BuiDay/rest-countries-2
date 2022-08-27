import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Search from './Search';

const SearchAndFilter = () => {
    return (
        <SearchAndFilterPane>
            <Search />
            <Filter />
        </SearchAndFilterPane>
    );
};

export default SearchAndFilter;

const SearchAndFilterPane = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:20px;
`