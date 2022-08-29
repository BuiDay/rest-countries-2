import React from 'react';
import style from './LoadingStyle.module.scss';

const Loading = () => {
    return (
        <div className={style.roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loading;