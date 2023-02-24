import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <h1>React is working</h1>
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
