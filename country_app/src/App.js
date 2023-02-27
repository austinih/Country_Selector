import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import { DataContext } from './DataContext';


function App() {

  const [countryInfo, setCountryInfo] = useState({
      language: ''
  })
  
  return (
    <div className="App">
      {/* <DataContext.provider value={{countryInfo,setCountryInfo}}> */}
        <header className="App-header">
          <Header/> 
        </header>
        <main>
          <Main />
        </main>
      {/* </DataContext.provider> */}
    </div>
  );
}

export default App;
