import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent';
import CountryDetail from './Components/MainContent/CountryDetail';
import {ThemeContext} from './Components/ThemeContext/ThemeContext';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <ContentContainer >     
        <Routes>
          <Route exact path='/' element={<MainContent />} />
          <Route path='/region/:regionName' element={<MainContent />} />
          <Route path='/country/:countryName' element={<CountryDetail/>} />
          <Route path='/search/:Name' element={<MainContent />} />
        </Routes>
        </ContentContainer>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    height:100vh;
    overflow:hidden;  
    width:100%;
`

const ContentContainer = styled.div`
    max-width:1024px;
    width:100%;
    display:block;
    margin:0 auto;
    padding:0 12px;
`