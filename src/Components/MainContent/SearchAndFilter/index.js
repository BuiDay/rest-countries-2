import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const SearchAndFilter = () => {
    return (
        <SearchAndFilterPane>
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