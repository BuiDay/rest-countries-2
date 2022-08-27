import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent';
import {ThemeContext} from './Components/ThemeContext/ThemeContext';

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <AppContainer className={themeContext.theme}>
      <Header />
      <ContentContainer >     
        <MainContent />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    height:100vh;
    width:100%;
    overflow:hidden;  
`

const ContentContainer = styled.div`
    max-width:1024px;
    width:100%;
    display:block;
    margin:0 auto;
    padding:0 12px;
`