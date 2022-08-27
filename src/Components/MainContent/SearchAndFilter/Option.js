import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Option = (prop) => {
    const {Icon, Title} = prop;
    const navigate = useNavigate();

    const handleOption =()=>{
        if(Title !== 'All')
            navigate(`/region/${Title}`);
        else
        navigate('/');
    }

    return (
        <OptionItem onClick={()=>handleOption()}>
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