import React from 'react';
import styled from 'styled-components';
const Option = (prop) => {
    const {Icon, Title} = prop;
    return (
        <OptionItem>
            <Icon />
            <span>{Title}</span>
        </OptionItem>
    );
};

export default Option;

const OptionItem = styled.li`
    display:flex;
    align-items:center;
    font-size:18px;
    font-weight:500;
    cursor:pointer;
    padding:4px 8px;
    &:hover{
        font-weight:bold;
        background:var(--SelectOptionsBackground);
    }
    span{
        margin-left:5px;
    }
`