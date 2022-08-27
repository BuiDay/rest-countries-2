import React, { useContext } from 'react';
import styled from 'styled-components';
import SwitchMode from './SwitchMode';
import { ThemeContext } from '../ThemeContext/ThemeContext.js';

const Header = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <HeaderPane className={themeContext.theme}>
            <span className="title" > Where are you from?</span>
            <SwitchMode />
        </HeaderPane>
    );
};

export default Header;

const HeaderPane = styled.div`
    height:10vh;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 40px;
    box-shadow: var(--BoxShadow);

    .title{
        font-size:24px;
        font-weight:bold;
        text-shadow:var(--TextShadow);
    }
`