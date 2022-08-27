import style from './SwitchStyles.module.scss'
import React,{ useRef,useEffect,useState,useContext} from 'react';
import { FaMoon, FaSun} from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext/ThemeContext.js';


const SwitchMode = () => {
    const themeContext = useContext(ThemeContext);
    const refInput = useRef();
    const refCircle = useRef();
    const refToggle = useRef();
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
       refInput.current.checked = isDark;
    },[isDark])

    const handleToggle = ()=>{
        refInput.current.checked = !refInput.current.checked;
        setIsDark(refInput.current.checked);
        themeContext.toggleTheme();
    }

     useEffect(()=>{
        const changeBackgroundBtn = ()=>{
            if(isDark){
                refCircle.current.style.background = "#111";
                refToggle.current.style.background = "#fff";
            }
            else{
                refCircle.current.style.background = "#fff";
                refToggle.current.style.background = "hsl(208, 59%, 41%)";
            }
        }
        changeBackgroundBtn();
        document.addEventListener('resize',changeBackgroundBtn);
        return()=>document.removeEventListener('resize',changeBackgroundBtn);
    },[isDark])

    return (
        <div className={style.toggleBtn} ref={refToggle} onClick={()=>handleToggle()}>
            <input type='checkbox' className={style.Input} ref={refInput}/>
            <div className={style.Icon}>{isDark ? <FaMoon/> :<FaSun /> }</div>
            <div className={style.Circle} ref={refCircle}></div>
        </div>
    );
};

export default SwitchMode;