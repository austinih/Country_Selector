import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import DataContext from './DataContext';


function App() {

  const [countryInfo, setCountryInfo] = useState({
    countryName: '',
    spokenLanguage: ''

  });
  
  return (
    <DataContext.Provider value={{
      countryInfo,
      setCountryInfo
    }}>
      <div className="App">
       
          <header className="App-header">
            <Header/> 
          </header>
          <main>
            <Main />
          </main>
       
      </div>
    </DataContext.Provider>
  );
}

export default App;
