import React from 'react';
import Countries from './Countries';
import SearchAndFilter from './SearchAndFilter'

const MainContent = () => {
    return (
        <div>
            <SearchAndFilter /> 
            <Countries />
        </div>
    );
};

export default MainContent;