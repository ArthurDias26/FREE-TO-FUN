import {requestGameData} from './api/request'
import {useEffect, useState} from 'react'
import usePersistenceState from './utilis/usePersistenceState';

import GlobalStyle from './assets/style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import ToggleThemeContext from './contexts/ToggleThemeContext';
import dark from './assets/style/themes/dark'
import light from './assets/style/themes/light'

import { AuthProvider } from './contexts/AuthUserContext';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './utilis/Routes'

function App() {

  const [gameData, setGameData] = useState(null)

   useEffect(() => {
    async function loadData() {
    const MakeRequest =  await requestGameData.getGameData()
    if(MakeRequest[0].data[0].id){
      setGameData(MakeRequest)
    }}
    loadData()

  }, []) 
  

  let darkThemeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches

  const [theme, setTheme] = usePersistenceState('theme', darkThemeSystem ? dark : light)
  const toggleTheme = () => theme.title==='dark' ? setTheme(light) : setTheme(dark)

  return (
    <>
      <ToggleThemeContext.Provider value={{toggleTheme, theme}}>
          <ThemeProvider theme={theme}>
            <Router>
              
              <GlobalStyle/>

              <AuthProvider>
                <Routes gameData={gameData}/>
              </AuthProvider>

            </Router>
                  
          </ThemeProvider>
      </ToggleThemeContext.Provider>
    </>
  );
}

export default App;
